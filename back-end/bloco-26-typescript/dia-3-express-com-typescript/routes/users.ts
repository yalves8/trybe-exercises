import { Router, Request, Response } from "express";
// import User from '../interfaces/User';
import {read} from '../userList';

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
    const users = await read();
    return res.status(200).json(users);
});

export default router;