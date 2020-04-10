import { Request, Response } from 'express'
import { auth } from '../util/auth.utils';
export class Users {
    public auth = auth;

    public register = async (req: Request, res: Response) => {

        const email: string = req.body.email;
        const password: string = req.body.password;
        try {
            const user = await this.auth.createUserWithEmailAndPassword(email, password)
            res.send(user);
        } catch (error) {
            res.send(error)
        }
    }


    public login = async (req: Request, res: Response) => {
        const email: string = req.body.email;
        const password: string = req.body.password;
        try {
            const user = await this.auth.signInWithEmailAndPassword(email, password)
            res.send(user);
        } catch (error) {
            res.send(error)
        }
    }

}