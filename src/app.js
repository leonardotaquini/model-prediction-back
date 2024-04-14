import express from 'express';
import modelRouter from './routes/model.routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors( { origin: '*' } ));
app.use(express.json());
app.use('/model', modelRouter)



app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
