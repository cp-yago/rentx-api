export default interface IUpdateUserDTO {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  admin?: boolean;
  avatar?: string;
}
