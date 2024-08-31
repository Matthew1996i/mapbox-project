import { CreateHospitalDTO } from "../../../../modules/admin/dtos/hospitals";
import { HospitalEntity } from "../../../../modules/admin/entities/hospitals/hospitals.entity";
import { HospitalsRepositoryContract } from "../contracts/hospitals.repository.contract";
import { HospitalsModelMapper } from "../../../../modules/admin/dtos/hospitals/hospitals-model.mapper";

import prisma from "../../../../shared/infra/client";

export class HospitalsRepository implements HospitalsRepositoryContract {
  async list(): Promise<HospitalEntity[]> {
    const data = await prisma.hospital.findMany();

    const entities = data.map((item) => HospitalsModelMapper.toEntity(item));

    return entities;
  }
  async create(payload: CreateHospitalDTO): Promise<HospitalEntity> {
    const entity = await prisma.hospital.create({
      data: {
        ...payload,
      },
    });

    return HospitalsModelMapper.toEntity(entity);
  }
}
