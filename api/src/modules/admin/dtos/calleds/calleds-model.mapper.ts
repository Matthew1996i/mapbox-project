import { CalledDTO } from ".";
import { ValidationError } from "../../../../shared/errors/validation-error";
import { CalledsEntity } from "../../entities/calleds/calleds.entity";

export class CalledsModelMapper {
  static toEntity(model: CalledDTO) {
    const data = {
      CD_HOSPITAL: model.CD_HOSPITAL,
      CD_MEDICO: model.CD_MEDICO,
      IE_SEXO: model.IE_SEXO,
      IE_STATUS_CHAMADO: model.IE_STATUS_CHAMADO,
      IE_TIPO_CHAMADO: model.IE_TIPO_CHAMADO,
      NM_PACIENTE: model.NM_PACIENTE,
      NR_CHAMADO: model.NR_CHAMADO,
    };

    try {
      return new CalledsEntity(data);
    } catch {
      throw new ValidationError("An entity not be loaded");
    }
  }
}
