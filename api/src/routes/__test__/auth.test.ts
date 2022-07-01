import request from 'supertest';
import { app } from '../../app';
import { prisma } from '../../services/prisma';

afterAll(async () => {
    await prisma.$disconnect();
});

it('should create a new user', async () => {
    const user = await prisma.user.create({
        data: {
            email: 'sam@gmail.com',
            firstName: 'sam',
            lastName: 'sam',
            password: 'randompasssword',
            phone: '0021212121',
        },
    });
    expect(user.id).toEqual(1);
    return request(app).send({});
});
