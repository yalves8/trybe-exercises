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

export const listUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const list = await read();
        const findId = list.filter((i) => i.id === id);
        (findId ? res.status(200).json(findId) : res.status(401).json({ message: 'Não encontrado!' }));
    }catch (e: any) {
        res.status(400).json({message: e.message})
    }

}