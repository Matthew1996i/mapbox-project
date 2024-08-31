import { BadRequestError } from "../../../../shared/errors/bad-request-error";
import { inject, injectable } from "tsyringe";
import { DoctorsModelDTO } from "../../../../modules/admin/dtos/doctors";
import { DoctorEntity } from "../../../../modules/admin/entities/doctors/doctors.entity";
import { DoctorsRepositoryContract } from "../../../../modules/admin/repositories/contracts/doctors.repository.contract";

@injectable()
export class CreateDoctorUseCase {
  constructor(
    @inject("DoctorsRepository")
    private doctorsRepository: DoctorsRepositoryContract
  ) {}

  async execute(data: DoctorsModelDTO): Promise<DoctorEntity> {
    const { NM_MEDICO } = data;
    if (!NM_MEDICO) throw new BadRequestError("Input data not provided");

    return await this.doctorsRepository.create({ NM_MEDICO });
  }
}
