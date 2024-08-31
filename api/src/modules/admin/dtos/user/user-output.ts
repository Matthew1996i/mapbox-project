import { UserDTO } from ".";
import { UserEntity } from "../../../../modules/admin/entities/user/user.entity";

export class UserOutputMapper {
  static toOutput(entity: UserEntity): UserDTO {
    return entity.toJSON();
  }
}
