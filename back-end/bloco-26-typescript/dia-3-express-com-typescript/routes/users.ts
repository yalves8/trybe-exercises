import { Router, Request, Response } from "express";
import { read } from '../userList';
import {createUserController} from '../controllers/userController'

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
    const users = await read();
    return res.status(200).json(users);
});

router.post("/user", createUserController);


export default router;