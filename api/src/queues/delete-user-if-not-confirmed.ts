import bull from 'bull';
import { prisma } from 'src/prisma/prisma';
import { QueuesNames } from './queues-names';

// DELETE USER IF NOT CONFIRMED EMAIL IN 24 HOURS (1 DAY)
interface IPayload {
    userId: number;
}

const deleteUserIfNotConfirmedQueue = new bull<IPayload>(
    QueuesNames.DELETE_USER_IF_NOT_CONFIRMED,
    {
        redis: {
            host: process.env.REDIS_HOST,
        },
    },
);

// deleteUserIfNotConfirmedQueue is a Bull queue.
deleteUserIfNotConfirmedQueue.process(async ({ data }) => {
    // get user from database
    const user = await prisma.user.findUnique({
        where: {
            id: data.userId,
        },
    });
    // check if the user is confirmed
    if (!user?.isConfirmed) {
        // delete user from database if not confirmed
        await prisma.user.delete({
            where: {
                id: data.userId,
            },
        });
    }
});

export { deleteUserIfNotConfirmedQueue };
