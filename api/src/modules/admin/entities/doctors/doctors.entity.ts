import { DoctorsModelDTO } from "../../../../modules/admin/dtos/doctors";
import { Entity } from "../../../../modules/shared/entities/entity";

export class DoctorEntity extends Entity<DoctorsModelDTO> {
  constructor(public readonly props: DoctorsModelDTO) {
    super(props);
  }

  get cd_medico() {
    return this.props.CD_MEDICO;
  }

  private set cd_medico(value: number) {
    this.props.CD_MEDICO = value;
  }

  get nm_medico() {
    return this.props.NM_MEDICO;
  }

  private set nm_medico(value: string) {
    this.props.NM_MEDICO = value;
  }
}
