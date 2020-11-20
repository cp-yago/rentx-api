import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import IStorageProvider from '../../../shared/providers/IStorageProvider';

interface IRequest {
  id: string;
  fileName: string;
}

class UpdateAvatarService {
  constructor(
    private usersRepository: IUsersRepository,
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ id, fileName }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User does not exist');
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    const savedFileName = await this.storageProvider.saveFile(fileName);

    user.avatar = savedFileName;

    const updatedUser = await this.usersRepository.update({
      id,
      avatar: savedFileName,
    });

    return updatedUser;
  }
}

export default UpdateAvatarService;
