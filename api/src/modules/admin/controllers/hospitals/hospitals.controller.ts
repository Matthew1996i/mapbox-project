import { Request, Response } from "express";
import { CreateHospitalsUseCase } from "../../useCases/hospitals/create.usecase";
import { ListHospitalsUseCase } from "../../useCases/hospitals/list.usecase";

import { container } from "tsyringe";

export class HospitalsController {
  async handleList(request: Request, response: Response): Promise<Response> {
    const listHospitalsUseCase = container.resolve(ListHospitalsUseCase);

    try {
      const doctors = await listHospitalsUseCase.execute();

      return response.status(200).send(doctors);
    } catch (error) {
      console.error({
        local: "HospitalsController - list",
        description: error,
      });

      return response
        .status(500)
        .json({ local: "HospitalsController - list", description: error });
    }
  }

  async handleCreate(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createHospitalsUseCase = container.resolve(CreateHospitalsUseCase);

    try {
      const newHospital = await createHospitalsUseCase.execute({ ...data });

      return response.status(201).send(newHospital);
    } catch (error) {
      console.error({
        local: "HospitalsController - handle",
        description: error,
      });

      return response
        .status(500)
        .json({ local: "HospitalsController - handle", description: error });
    }
  }
}
