import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
    console.log('LOGIN ENDPOINT');
};

const register = (req: Request, res: Response) => {
    console.log('REGISTER ENDPOINT');
};

const currentUser = (req: Request, res: Response) => {
    console.log('CURRENT USER ENDPOINT');
};

const logout = (req: Request, res: Response) => {
    console.log('LOGOUT ENDPOINT');
};

export default { login, register, currentUser, logout };
