import { HospitalEntity } from "../../../../modules/admin/entities/hospitals/hospitals.entity";
import { HospitalDTO } from "../../../../modules/admin/dtos/hospitals";

export interface HospitalsRepositoryContract {
  list(): Promise<HospitalEntity[]>;
  create(payload: HospitalDTO): Promise<HospitalEntity>;
}
