import Express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = Express();
app.use(cors());
app.use('/' , router);

const PORT = 8000;

DBConnection();
app.listen(PORT , () => console.log(`server is running on PORT ${PORT}`));
