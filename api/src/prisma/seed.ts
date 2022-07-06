import { PrismaClient } from '@prisma/client';
import { CITIES_DATA } from './seed-data';

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);
    await Promise.all(
        CITIES_DATA.map((city) => prisma.city.create({ data: city })),
    );
    console.log(`Seeding finished.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
