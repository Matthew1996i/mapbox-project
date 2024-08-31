import { Request, Response } from "express";
import { CreateCalledsUseCase } from "../../useCases/calleds/create.usecase";
import { ListCalledsUseCase } from "../../useCases/calleds/list.usecase";

import { container } from "tsyringe";

export class CalledsController {
  async handleList(request: Request, response: Response): Promise<Response> {
    const listCalledsUseCase = container.resolve(ListCalledsUseCase);

    try {
      const calleds = await listCalledsUseCase.execute();

      return response.status(200).send(calleds);
    } catch (error) {
      console.error({
        local: "CalledsController - list",
        description: error,
      });

      return response
        .status(500)
        .json({ local: "CalledsController - list", description: error });
    }
  }

  async handleCreate(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createCalledsUseCase = container.resolve(CreateCalledsUseCase);

    try {
      const newCalled = await createCalledsUseCase.execute({ ...data });

      return response.status(201).send(newCalled);
    } catch (error) {
      console.error({
        local: "CalledsController - handle",
        description: error,
      });

      return response
        .status(500)
        .json({ local: "CalledsController - handle", description: error });
    }
  }
}
