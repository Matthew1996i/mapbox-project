import { UserEntity } from "../../../../modules/admin/entities/user/user.entity";
import { UserDTO } from ".";
import { ValidationError } from "../../../../shared/errors/validation-error";

export class UserModelMapper {
  static toEntity(model: UserDTO) {
    const data = {
      id: model.id,
      name: model.name,
      email: model.email,
      password: model.password,
      role: model.role,
      created_at: model.created_at,
      updated_at: model.updated_at,
    };

    try {
      return new UserEntity(data);
    } catch {
      throw new ValidationError("An entity not be loaded");
    }
  }
}
