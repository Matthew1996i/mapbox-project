import { HospitalEntity } from "../../../../modules/admin/entities/hospitals/hospitals.entity";
import { HospitalDTO } from ".";
import { ValidationError } from "../../../../shared/errors/validation-error";

export class HospitalsModelMapper {
  static toEntity(model: HospitalDTO) {
    const data = {
      CD_HOSPITAL: model.CD_HOSPITAL,
      NM_HOSPITAL: model.NM_HOSPITAL,
      NR_LATITUDE: model.NR_LATITUDE,
      NR_LONGITUDE: model.NR_LONGITUDE,
    };

    try {
      return new HospitalEntity(data);
    } catch {
      throw new ValidationError("An entity not be loaded");
    }
  }
}
