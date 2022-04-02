import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/users', (req, res) => {
});


app.listen(3333, function () {
    console.log('CORS-enabled web server listening on port 80')
})