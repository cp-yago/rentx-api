import IUserRepository from '../repositories/IUsersRepository';
import IStorageProvider from '../../../shared/providers/IStorageProvider';

interface IRequest {
  id: string;
}

class DeleteAvatarService {
  constructor(
    private usersRepository: IUserRepository,
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User does not exist');
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);

      await this.usersRepository.deleteAvatar(id);
    }
  }
}

export default DeleteAvatarService;
