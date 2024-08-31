import { CalledDTO } from "../../dtos/calleds";
import { CalledsEntity } from "../../entities/calleds/calleds.entity";
import { CalledsRepositoryContract } from "../contracts/calleds.repository.contract";

import prisma from "../../../../shared/infra/client";
import { CalledsModelMapper } from "../../../../modules/admin/dtos/calleds/calleds-model.mapper";

export class CalledsRepository implements CalledsRepositoryContract {
  async list(): Promise<CalledsEntity[]> {
    const data = await prisma.called.findMany();

    const entities = data.map((item) => CalledsModelMapper.toEntity(item));

    return entities;
  }
  async create(payload: CalledDTO): Promise<CalledsEntity> {
    const entity = await prisma.called.create({
      data: {
        ...payload,
      },
    });

    return CalledsModelMapper.toEntity(entity);
  }
}
