import { Request, Response } from "express";
import { idUser } from '../interfaces/User';
import { read } from '../userList';
import { createUser, saveUser } from '../interfaces/User';

export const createUserController = async (req: Request, res: Response) => {
    const { name, email, password } = req.body as idUser;
    try {
        const create = await createUser(name, email, password);
        const users = await read();
        users.push(create);
        saveUser(create);
        res.json(create);

    } catch (e: any) {
        res.status(400).send({ e })

    }
};