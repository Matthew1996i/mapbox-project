import { BadRequestError } from "../../../../shared/errors/bad-request-error";
import { CalledDTO } from "../../dtos/calleds";
import { CalledsRepositoryContract } from "../../repositories/contracts/calleds.repository.contract";
import { CalledsEntity } from "../../entities/calleds/calleds.entity";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateCalledsUseCase {
  constructor(
    @inject("CalledsRepository")
    private calledsRepository: CalledsRepositoryContract
  ) {}

  async execute(data: CalledDTO): Promise<CalledsEntity> {
    const {
      CD_HOSPITAL,
      CD_MEDICO,
      IE_SEXO,
      IE_STATUS_CHAMADO,
      IE_TIPO_CHAMADO,
      NM_PACIENTE,
    } = data;
    if (
      !CD_HOSPITAL ||
      !IE_SEXO ||
      !IE_STATUS_CHAMADO ||
      !IE_TIPO_CHAMADO ||
      !NM_PACIENTE
    )
      throw new BadRequestError("Input data not provided");

    return await this.calledsRepository.create({
      CD_HOSPITAL,
      CD_MEDICO,
      IE_SEXO,
      IE_STATUS_CHAMADO,
      IE_TIPO_CHAMADO,
      NM_PACIENTE,
    });
  }
}
