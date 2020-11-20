import { Router } from 'express';

import uploadHandler from '@shared/infra/http/middlewares/handleUpload';
import ensureUserIsAuthenticated from '../middlewares/ensureUserIsAuthenticated';

import AvatarsController from '../controllers/AvatarController';

const avatarRoutes = Router();

const avatarsController = new AvatarsController();

avatarRoutes.patch(
  '/',
  ensureUserIsAuthenticated,
  uploadHandler,
  avatarsController.update,
);

export default avatarRoutes;
