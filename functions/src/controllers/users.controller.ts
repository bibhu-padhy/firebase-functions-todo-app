import { Request, Response } from 'express';
import { auth } from '../util/auth.utils';
import { db } from '../util/admin.utils';

export class Users {

    private auth = auth;

    public register = async (req: Request, res: Response) => {

        const email: string = req.body.email;
        const password: string = req.body.password;
        const userName: string = req.body.userName;

        try {
            const user = await this.auth // creating a user with email and password
                .createUserWithEmailAndPassword(email, password)

            await db.collection('users_list') // saving users info in the users_list collection
                .add({ email, userName, userId: user.user?.uid });

            res.status(201).json({ success: true, message: 'User has created successfully' });
        } catch (error) {
            res.send(error)
        }
    }


    public login = async (req: any, res: Response) => {
        const email: string = req.body.email;
        const password: string = req.body.password;
        try {
            const user = await this.auth.signInWithEmailAndPassword(email, password)
            const token = await user.user?.getIdToken();
            res.status(201).json({ token: token, message: 'authenticated user' });
        } catch (error) {
            res.send(error)
        }
    }

}