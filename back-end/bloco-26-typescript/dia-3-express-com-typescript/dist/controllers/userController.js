"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUserById = exports.createUserController = void 0;
const userList_1 = require("../userList");
const User_1 = require("../interfaces/User");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const create = yield (0, User_1.createUser)(name, email, password);
        const users = yield (0, userList_1.read)();
        users.push(create);
        (0, User_1.saveUser)(create);
        res.json(create);
    }
    catch (e) {
        res.status(400).send({ e });
    }
});
exports.createUserController = createUserController;
const listUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const list = yield (0, userList_1.read)();
        const findId = list.filter((i) => i.id === id);
        (findId ? res.status(200).json(findId) : res.status(401).json({ message: 'Não encontrado!' }));
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
});
exports.listUserById = listUserById;
