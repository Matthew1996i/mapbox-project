import { BadRequestError } from "../../../../shared/errors/bad-request-error";
import { CreateHospitalDTO } from "../../../../modules/admin/dtos/hospitals";
import { HospitalsRepositoryContract } from "../../../../modules/admin/repositories/contracts/hospitals.repository.contract";
import { HospitalEntity } from "../../../../modules/admin/entities/hospitals/hospitals.entity";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateHospitalsUseCase {
  constructor(
    @inject("HospitalsRepository")
    private hospitalsRepository: HospitalsRepositoryContract
  ) {}

  async execute(data: CreateHospitalDTO): Promise<HospitalEntity> {
    const { NM_HOSPITAL, NR_LATITUDE, NR_LONGITUDE } = data;
    if (!NM_HOSPITAL || !NR_LATITUDE || !NR_LONGITUDE)
      throw new BadRequestError("Input data not provided");

    return await this.hospitalsRepository.create({
      NM_HOSPITAL,
      NR_LATITUDE,
      NR_LONGITUDE,
    });
  }
}
