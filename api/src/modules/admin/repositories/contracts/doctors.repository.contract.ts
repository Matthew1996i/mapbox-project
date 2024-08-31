import { DoctorsModelDTO } from "../../../../modules/admin/dtos/doctors";
import { DoctorEntity } from "../../../../modules/admin/entities/doctors/doctors.entity";

export interface DoctorsRepositoryContract {
  list(): Promise<DoctorEntity[]>;
  create(payload: DoctorsModelDTO): Promise<DoctorEntity>;
}
