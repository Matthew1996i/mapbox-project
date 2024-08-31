import auth from "../../../../config/auth";
import { UserRepositoryContract } from "../../repositories/contracts/user.repository.contract";
import { HashProvider } from "../../../shared/providers/hash-provider/contracts/hash-provider";
import { AuthError } from "../../../../shared/errors/AuthError";

import { injectable, inject } from "tsyringe";
import { sign } from "jsonwebtoken";
import { UserOutputMapper } from "../../../../modules/admin/dtos/user/user-output";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
}

@injectable()
export class AuthUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepositoryContract,

    @inject("BcryptjsHashProvider")
    private bcryptjsHashProvider: HashProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const { expires_in, secret_token } = auth;

    const user = await this.userRepository.findByEmail(email);

    const entity = UserOutputMapper.toOutput(user);

    if (!user) {
      throw new AuthError();
    }

    const passwordMatch = await this.bcryptjsHashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new AuthError();
    }

    const token = sign({ id: entity.id }, secret_token, {
      subject: String(entity.id),
      expiresIn: expires_in,
    });

    return {
      token,
    };
  }
}
