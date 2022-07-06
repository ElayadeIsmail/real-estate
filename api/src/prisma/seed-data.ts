import { Prisma } from '@prisma/client';

export const CITIES_DATA: Prisma.CityCreateInput[] = [
    {
        name: {
            fr: 'Meknès',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Essaada',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Mjane 2',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Sidi Bouzekri',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Ville Nouvelle',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Other',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Larache',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'El Kelaâ des Sraghna',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Casablanca',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Ain Chok',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Ain Harrouda',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Ain Sebaa',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Anfa',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Avenue Bordeaux',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Belvédère',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Benjdia',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Bourgogne',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'El Oulfa',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay al Qods',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay AZHAR',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Maarif',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Oulfa',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Sidi Bernoussi',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Sidi Moumen',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Verdin',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Yasmina',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'IFrane',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Khemisset',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Hay Essalam',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Saada',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Wahda',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Others',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Bouznika',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Amizmiz',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Laâyoune',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Fès',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Ain Chkef',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Narjiss',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Riyad',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Ville Nouvelle',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Chichaoua',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Assilah',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Béni Mellal',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Benslimane',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Kenitra',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'la ville haute',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Saknia',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Marrakech',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Abwab Marrakech',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Al Afaq',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Al Massira',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Daoudiate',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Douar El Askar',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: "Hay Sidi M'Barek",
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Youssoufia',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Tetouan',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Temara',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Al Massira 1',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Al Massira 2',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Al Wifak',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Tarfaya',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Tamesna',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [{ name: { fr: 'Other neighborhoods', ar: '' } }],
            },
        },
    },
    {
        name: {
            fr: 'Tanger',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Casabarata',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'place du 9 Avril',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Settat',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Sidi Bennour',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Autres quartiers',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Salé',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Bettana',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Dar El Hamra',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'El Karia',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Chafaa',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Chmaou',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Essalam',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Inbiat',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Karima',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Moulay Abdellah',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Rahma',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Salam',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Laayayda',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Tabriquet',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Skhirat',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Zagora',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Mohammedia',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Safi',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Rabat',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Diour Jamaa',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'El Akkari',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hassan',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay El Manzeh',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Hay Nahda',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: "L'OCEAN",
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Takaddoum',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Yaakoub el Mansour',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Yacoub  Al Mansour',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Youssoufia',
                            ar: '',
                        },
                    },
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Agadir',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
    {
        name: {
            fr: 'Séfrou',
            ar: '',
        },
        zones: {
            createMany: {
                skipDuplicates: true,
                data: [
                    {
                        name: {
                            fr: 'Other neighborhoods',
                            ar: '',
                        },
                    },
                ],
            },
        },
    },
];
