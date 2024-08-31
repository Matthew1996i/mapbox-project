import { UserCreateDTO, UserDTO } from "../../../../modules/admin/dtos/user";
import { UserEntity } from "../../../../modules/admin/entities/user/user.entity";

export interface UserRepositoryContract {
  create(payload: UserCreateDTO): Promise<UserDTO>;
  findByEmail(email: string): Promise<UserEntity>;
  alreadyInUse(email: string): Promise<void>;
}
