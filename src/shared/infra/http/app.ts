import express from 'express';
import cors from 'cors';

import '@shared/infra/typeorm';
import routes from './routes';
import handleErrors from './middlewares/handleErros';
import uploadConfig from '../../config/upload';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);
app.use(handleErrors);

export default app;
