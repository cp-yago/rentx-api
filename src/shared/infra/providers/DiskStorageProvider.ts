import fs from 'fs';
import path from 'path';
import uploadConfig from '../../config/upload';
import IStorageProvider from '../../providers/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tempFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file),
    );
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);
    console.log('filePath: ', filePath);

    try {
      await fs.promises.stat(filePath);
    } catch (err) {
      console.log('Deu ruim: ', err);
    }

    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
