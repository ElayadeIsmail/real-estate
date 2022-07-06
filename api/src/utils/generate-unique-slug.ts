import slugify from 'slugify';
import { prisma } from '../prisma/prisma';

const isSlugExist = async (slug: string) => {
    const count = await prisma.listing.count({ where: { slug } });
    return count !== 0;
};

export const generateSlugFromTitle = async (title: string) => {
    let slug = slugify(title, { lower: true, trim: true });
    let i = 1;
    while (await isSlugExist(slug)) {
        slug = `${slug}-${i}`;
        i++;
    }
    return slug;
};
