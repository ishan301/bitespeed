import express from 'express';
import { identifyRoute } from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.post('/identify', identifyRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});