import { Request, Response } from 'express';
import UpdateAvatarService from '../../../services/UpdateAvatarService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';
import DiskStorageProvider from '../../../../../shared/infra/providers/DiskStorageProvider';
import DeleteAvatarService from '../../../services/DeleteAvatarService';

class AvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const diskStorageProvider = new DiskStorageProvider();
    const updateAvatar = new UpdateAvatarService(
      usersRepository,
      diskStorageProvider,
    );

    const { id } = request.user;
    const { fileName } = request;

    const user = await updateAvatar.execute({ id, fileName });
    return response.status(200).json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const usersRepository = new UsersRepository();
    const diskStorageProvider = new DiskStorageProvider();
    const deleteAvatar = new DeleteAvatarService(
      usersRepository,
      diskStorageProvider,
    );

    const { id } = request.user;

    await deleteAvatar.execute({ id });

    return response.status(204).send();
  }
}

export default AvatarController;
