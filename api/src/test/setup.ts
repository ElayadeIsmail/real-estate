import 'dotenv-safe/config';

import { exec } from 'child_process';
import { Client } from 'pg';
import { promisify } from 'util';
import { v4 as uuidv4 } from 'uuid';
const execAsync = promisify(exec);

// const prismaBinary = './node_modules/.bin/prisma2';

let schema: string;
let connectionString: string;

beforeAll(async () => {
    schema = `test_${uuidv4()}`;
    const BASE_CONNECTION_STRING = process.env.PG_URL;
    connectionString = `${BASE_CONNECTION_STRING}?schema=${schema}`;
    process.env.DATABASE_URL = connectionString;

    console.log('DBURL', process.env.DATABASE_URL);
    // Run the migrations to ensure our schema has the required structure
    await execAsync(`npx prisma db push`);
});

afterEach(async () => {
    await execAsync(`npx prisma migrate reset --force`);
});

afterAll(async () => {
    // Drop the schema after the tests have completed
    const client = new Client({
        connectionString,
    });
    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${schema}" CASCADE`);
    await client.end();
});
