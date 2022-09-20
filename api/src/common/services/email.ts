import { IS_PROD } from '@common/constants';
import nodeMailer from 'nodemailer';

const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: +process.env.SMTP_PORT,
    secure: IS_PROD,
});
export const sendEmail = async (
    to: string,
    subject: string,
    html: string,
    text?: string,
) => {
    const mailOptions = {
        from: process.env.MAILER_FROM,
        to,
        subject,
        html,
        text,
    };
    try {
        const res = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', res.messageId);
    } catch (error) {
        console.log(error);
        throw new Error("Can't send email");
    }
};