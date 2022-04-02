import express from 'express';
import cors from 'cors';
import { User } from './../db/models/User';

const app = express();

app.use(cors());

app.get('/users', async (req, res) => {
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


app.listen(3333, function () {
    console.log('CORS-enabled web server listening on port 80')
})