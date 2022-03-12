import fs from 'fs/promises';
import { User } from './interfaces/User';

async function read(): Promise<User[]> {
    const data = await fs.readFile("./users.json", "utf8");

    const users: User[] = JSON.parse(data);

    return users;
}

async function write(data: User[]): Promise<void> {
    await fs.writeFile("./users.json", JSON.stringify(data));
}

export {
    read,
    write
}