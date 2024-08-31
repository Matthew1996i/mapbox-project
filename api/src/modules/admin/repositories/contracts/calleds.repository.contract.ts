import { CalledsEntity } from "../../entities/calleds/calleds.entity";
import { CalledDTO } from "../../dtos/calleds";

export interface CalledsRepositoryContract {
  list(): Promise<CalledsEntity[]>;
  create(payload: CalledDTO): Promise<CalledsEntity>;
}
