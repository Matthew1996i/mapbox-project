import { inject, injectable } from "tsyringe";
import { DoctorsRepositoryContract } from "../../../../modules/admin/repositories/contracts/doctors.repository.contract";
import { DoctorEntity } from "../../../../modules/admin/entities/doctors/doctors.entity";

@injectable()
export class ListDoctorUseCase {
  constructor(
    @inject("DoctorsRepository")
    private doctorsRepository: DoctorsRepositoryContract
  ) {}

  async execute(): Promise<DoctorEntity[]> {
    return await this.doctorsRepository.list();
  }
}
