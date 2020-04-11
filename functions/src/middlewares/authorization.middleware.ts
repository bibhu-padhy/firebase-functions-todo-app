import * as admin from 'firebase-admin';
import { db } from '../util/admin.utils';

export class AuthorizationMiddleware {
    public admin = admin.auth();

    public verifyToken = async (req: any, res: any, next: any) => {
        try {
            // first get the token from headers
            const idToken = req.headers.authorization?.split('Bearer ')[1];
            // here we are getting the decoded token
            const decodedToken = await this.admin.verifyIdToken(`${idToken}`);
            const getUserFromDb = await db.collection('users_list')
                .where('userId', '==', decodedToken.uid)
                .limit(1)
                .get();
            req.user = decodedToken;
            req.user.userName = getUserFromDb.docs[0].data().userName;
            next();
        } catch (error) {
            if (error.code === "auth/id-token-expired") {
                res.status(500).json({ success: false, message: 'Auth token has expired' });
            } else if (error.code === "auth/argument-error") {
                res.status(500).json({ success: false, message: 'Auth token is invalid' });
            }
        }
    }
}