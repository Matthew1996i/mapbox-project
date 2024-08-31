import { inject, injectable } from "tsyringe";
import { CalledsRepositoryContract } from "../../repositories/contracts/calleds.repository.contract";
import { CalledsEntity } from "../../entities/calleds/calleds.entity";

@injectable()
export class ListCalledsUseCase {
  constructor(
    @inject("CalledsRepository")
    private calledsRepository: CalledsRepositoryContract
  ) {}

  async execute(): Promise<CalledsEntity[]> {
    return await this.calledsRepository.list();
  }
}
