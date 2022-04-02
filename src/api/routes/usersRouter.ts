import {Router} from 'express';
import { User } from '../../db/models/User';

const userRouter =  Router();

userRouter.get('/', async (req, res) => {
    const result: {
        users: any[]
    } = {
        users: []
    };
    (await User.find()).forEach(user => {
        result.users.push({
            name: user.f_name
        });
    });
    res.json(result);
});

export default userRouter;