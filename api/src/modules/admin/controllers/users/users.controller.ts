import { Request, Response } from "express";
import { CreateUserUseCase } from "../../useCases/user/create.usecase";
import { container } from "tsyringe";

export class UserController {
  async handleCreate(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      const newUser = await createUserUseCase.execute({ ...data });

      return response.status(201).send(newUser);
    } catch (error) {
      console.error({ local: "UserController - handle", description: error });

      return response
        .status(500)
        .json({ local: "UserController - handle", description: error });
    }
  }
}
