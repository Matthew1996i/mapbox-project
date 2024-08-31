import { DoctorsModelDTO } from "../../../../modules/admin/dtos/doctors";
import { DoctorEntity } from "../../../../modules/admin/entities/doctors/doctors.entity";
import { DoctorsRepositoryContract } from "../contracts/doctors.repository.contract";
import prisma from "../../../../shared/infra/client";
import { DoctorsModelMapper } from "../../../../modules/admin/dtos/doctors/doctors-model.mapper";

export class DoctorsRepository implements DoctorsRepositoryContract {
  async list(): Promise<DoctorEntity[]> {
    const data = await prisma.doctor.findMany();
    const entities = data.map((item) => DoctorsModelMapper.toEntity(item));

    return entities;
  }

  async create(payload: DoctorsModelDTO): Promise<DoctorEntity> {
    const doctor = await prisma.doctor.create({
      data: {
        NM_MEDICO: payload.NM_MEDICO,
      },
    });

    return DoctorsModelMapper.toEntity(doctor);
  }
}
