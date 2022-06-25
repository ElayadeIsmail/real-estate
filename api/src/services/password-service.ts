import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class PasswordService {
    // Hash Password
    static async toHash(password: string): Promise<string> {
        // Generate a random salt
        const salt = randomBytes(8).toString('hex');
        // Hash the password with the salt
        const buffer = (await scryptAsync(password, salt, 64)) as Buffer;
        // Return the hashed password
        return `${buffer.toString('hex')}.${salt}`;
    }

    static async compare(
        storedPassword: string,
        suppliedPassword: string,
    ): Promise<boolean> {
        // Split the stored password into the hash and salt
        const [hashedPassword, salt] = storedPassword.split('.');
        // Hash the supplied password with the salt
        const buffer = (await scryptAsync(
            suppliedPassword,
            salt,
            64,
        )) as Buffer;
        // Return true if the hashed password matches the stored password
        return buffer.toString('hex') === hashedPassword;
    }
}
