import express from 'express';

import '@shared/infra/typeorm';
import routes from './routes';
import handleErrors from './middlewares/handleErros';

const app = express();

app.use(express.json());
app.use(routes);
app.use(handleErrors);

export default app;
