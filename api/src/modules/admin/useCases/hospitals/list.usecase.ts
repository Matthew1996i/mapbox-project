import { inject, injectable } from "tsyringe";
import { HospitalsRepositoryContract } from "../../../../modules/admin/repositories/contracts/hospitals.repository.contract";
import { HospitalEntity } from "../../../../modules/admin/entities/hospitals/hospitals.entity";

@injectable()
export class ListHospitalsUseCase {
  constructor(
    @inject("HospitalsRepository")
    private hospitalsRepository: HospitalsRepositoryContract
  ) {}

  async execute(): Promise<HospitalEntity[]> {
    return await this.hospitalsRepository.list();
  }
}
