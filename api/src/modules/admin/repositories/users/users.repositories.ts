import { UserDTO } from "modules/admin/dtos/user";
import { UserRepositoryContract } from "../contracts/user.repository.contract";
import prisma from "../../../../shared/infra/client";
import { UserModelMapper } from "../../../../modules/admin/dtos/user/user-model.mapper";
import { ConflictError } from "../../../../shared/errors/conflict-error";
import { UserEntity } from "../../../../modules/admin/entities/user/user.entity";

export class UserRepository implements UserRepositoryContract {
  async create(payload: UserEntity): Promise<UserDTO> {
    const entity = await prisma.user.create({
      data: {
        ...payload.toJSON(),
      },
    });

    return UserModelMapper.toEntity(entity);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const entity = await this._getByEmail(email);

    if (entity) return UserModelMapper.toEntity(entity);
  }

  async alreadyInUse(email: string): Promise<void> {
    const entity = await this._getByEmail(email);

    if (entity) throw new ConflictError(`Email adress already used`);
  }

  private async _getByEmail(email: string): Promise<UserDTO> {
    const entity = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return entity;
  }
}
