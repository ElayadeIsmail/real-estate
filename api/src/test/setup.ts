import { prisma } from '../prisma/prisma';

afterAll(async () => {
    await prisma.$disconnect();
});
