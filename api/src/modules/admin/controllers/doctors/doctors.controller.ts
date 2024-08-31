import { Request, Response } from "express";
import { CreateDoctorUseCase } from "../../useCases/doctor/create.usecase";
import { ListDoctorUseCase } from "../../useCases/doctor/list.usecase";

import { container } from "tsyringe";

export class DoctorsController {
  async handleList(request: Request, response: Response): Promise<Response> {
    const listDoctorUseCase = container.resolve(ListDoctorUseCase);

    try {
      const doctors = await listDoctorUseCase.execute();

      return response.status(200).send(doctors);
    } catch (error) {
      console.error({ local: "DoctorsController - list", description: error });

      return response
        .status(500)
        .json({ local: "DoctorsController - list", description: error });
    }
  }

  async handleCreate(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createDoctorUseCase = container.resolve(CreateDoctorUseCase);

    try {
      const newDoctor = await createDoctorUseCase.execute({ ...data });

      return response.status(201).send(newDoctor);
    } catch (error) {
      console.error({
        local: "DoctorsController - handle",
        description: error,
      });

      return response
        .status(500)
        .json({ local: "DoctorsController - handle", description: error });
    }
  }
}
