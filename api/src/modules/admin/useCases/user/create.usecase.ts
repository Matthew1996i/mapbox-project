import { UserCreateDTO, UserDTO } from "modules/admin/dtos/user";
import { UserEntity } from "../../../../modules/admin/entities/user/user.entity";
import { UserRepositoryContract } from "../../../../modules/admin/repositories/contracts/user.repository.contract";
import { HashProvider } from "../../../shared/providers/hash-provider/contracts/hash-provider";
import { BadRequestError } from "../../../../shared/errors/bad-request-error";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepositoryContract,

    @inject("BcryptjsHashProvider")
    private bcryptjsHashProvider: HashProvider
  ) {}

  async execute(data: UserCreateDTO): Promise<UserDTO> {
    const { email, name, password } = data;
    if (!email || !name || !password)
      throw new BadRequestError("Input data not provided");

    await this.userRepository.alreadyInUse(data.email);

    const hashPassword = await this.bcryptjsHashProvider.generateHash(
      data.password
    );

    const entity = new UserEntity(
      Object.assign(data, { password: hashPassword })
    );

    return await this.userRepository.create(entity);
  }
}
