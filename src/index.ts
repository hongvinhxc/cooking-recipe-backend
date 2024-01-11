import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})