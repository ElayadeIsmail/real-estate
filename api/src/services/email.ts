import nodeMailer from 'nodemailer';
import { IS_PROD } from '../constants';

const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: +process.env.SMTP_PORT,
    secure: IS_PROD,
});
export const sendEmail = async () => {
    const mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: 'receiver@gmai.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: '<h1>Welcome</h1>',
    };
    try {
        const res = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', res.messageId);
    } catch (error) {
        console.log(error);
        throw new Error("Can't send email");
    }
};
