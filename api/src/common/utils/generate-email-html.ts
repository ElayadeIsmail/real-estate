import {
    CONFIRM_EMAIL_PREFIX,
    FORGOT_PASSWORD_PREFIX,
    FRONTEND_URL,
} from '@common/constants';
import { redis } from '@common/services';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { v4 } from 'uuid';

const templatesOptions = {
    Confirmation: {
        prefix: CONFIRM_EMAIL_PREFIX,
        baseUrl: `${FRONTEND_URL}/confirm-email`,
        templateName: 'confirm-email.html',
    },
    ResetPassword: {
        prefix: FORGOT_PASSWORD_PREFIX,
        baseUrl: `${FRONTEND_URL}/reset-password`,
        templateName: 'reset-password.html',
    },
};

export const generateEmailHtml = async (
    userId: number,
    emailType: keyof typeof templatesOptions,
) => {
    const token = v4();
    await redis.set(
        templatesOptions[emailType].prefix + token,
        userId,
        'EX',
        60 * 60 * 24,
    ); // Expired after 1 day
    const url = templatesOptions[emailType].baseUrl + '/' + token;
    const html = await readFile(
        join(
            process.cwd(),
            'templates',
            templatesOptions[emailType].templateName,
        ),
        'utf8',
    );
    return html.replace('[%url%]"', url);
};
