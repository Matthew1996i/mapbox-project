import { HospitalDTO } from "../../../../modules/admin/dtos/hospitals";
import { Entity } from "../../../../modules/shared/entities/entity";

export class HospitalEntity extends Entity<HospitalDTO> {
  constructor(props: HospitalDTO) {
    super(props);
  }

  get cd_hospital() {
    return this.props.CD_HOSPITAL;
  }

  private set cd_hospital(value: number) {
    this.props.CD_HOSPITAL = value;
  }

  get nm_hospital() {
    return this.props.NM_HOSPITAL;
  }

  private set nm_hospital(value: string) {
    this.props.NM_HOSPITAL = value;
  }

  get nr_latitute() {
    return this.props.NR_LATITUDE;
  }

  private set nr_latitute(value: number) {
    this.props.NR_LATITUDE = value;
  }

  get nr_longitute() {
    return this.props.NR_LONGITUDE;
  }

  private set nr_longitute(value: number) {
    this.props.NR_LONGITUDE = value;
  }
}
