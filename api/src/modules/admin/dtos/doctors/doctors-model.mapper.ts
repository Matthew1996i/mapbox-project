import { DoctorsModelDTO } from ".";
import { ValidationError } from "../../../../shared/errors/validation-error";
import { DoctorEntity } from "../../../../modules/admin/entities/doctors/doctors.entity";

export class DoctorsModelMapper {
  static toEntity(model: DoctorsModelDTO) {
    const data = {
      CD_MEDICO: model.CD_MEDICO,
      NM_MEDICO: model.NM_MEDICO,
    };

    try {
      return new DoctorEntity(data);
    } catch {
      throw new ValidationError("An entity not be loaded");
    }
  }
}
