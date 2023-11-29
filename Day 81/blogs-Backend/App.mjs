import express from 'express';
import db from './database/db.mjs';
import router from './routes/blogRoutes.mjs';
import morgan from 'morgan';
import cors from 'cors';
// create an app
const app = express();
//adding middle wares
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/blogs',router);

export default app;
