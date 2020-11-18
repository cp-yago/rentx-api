import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/user.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import carsRouter from '@modules/cars/infra/http/routes/car.routes';
import rentalsRouter from '@modules/rentals/infra/http/routes/rental.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/cars', carsRouter);
routes.use('/rentals', rentalsRouter);

export default routes;
