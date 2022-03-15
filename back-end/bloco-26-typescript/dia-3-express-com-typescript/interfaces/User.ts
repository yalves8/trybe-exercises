import { hashPass } from './../passCrypt/bcrypt';
import { read, write } from '../userList';

import uuid4 from 'uuid4';
interface User {
    id: string,
    name: string;
    email: string;
}

interface idUser extends User {
    password: string;
}

const saveUser = (user: idUser): User => ({
    id: user.id,
    name: user.name,
    email: user.email,
});

const createUser = async (name: string, email: string, password: string): Promise<idUser | never> => {
    const id = uuid4();
    // console.log('oi');
    
    return {
        id,
        name,
        email,
        password: await hashPass(password),
    };
    
}

export {
    User,
    idUser,
    saveUser,
    createUser
}