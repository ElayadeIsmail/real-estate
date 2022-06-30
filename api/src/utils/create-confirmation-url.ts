import { v4 } from 'uuid';
import { redis } from '../services/redis';

export const createConfirmationUrl = async (userId: number) => {
    const token = v4();
    await redis.set(token, userId, 'EX', 60 * 60 * 24); // Expired after 1 day
    return `${process.env.FRONTEND_URL}/user/confirm/${token}`;
};
