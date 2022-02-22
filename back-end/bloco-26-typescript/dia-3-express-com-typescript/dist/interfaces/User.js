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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.saveUser = void 0;
const bcrypt_1 = require("./../passCrypt/bcrypt");
const uuid4_1 = __importDefault(require("uuid4"));
const saveUser = (user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
});
exports.saveUser = saveUser;
const createUser = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, uuid4_1.default)();
    // console.log('oi');
    return {
        id,
        name,
        email,
        password: yield (0, bcrypt_1.hashPass)(password),
    };
});
exports.createUser = createUser;
