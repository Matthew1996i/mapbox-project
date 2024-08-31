import { Entity } from "../../../shared/entities/entity";
import { CalledDTO } from "../../dtos/calleds";

export class CalledsEntity extends Entity<CalledDTO> {
  constructor(props: CalledDTO) {
    super(props);
  }

  get cd_hospital() {
    return this.props.CD_HOSPITAL;
  }

  private set cd_hospital(value: number) {
    this.props.CD_HOSPITAL = value;
  }

  get cd_medico() {
    return this.props.CD_MEDICO;
  }

  private set cd_medico(value: number) {
    this.props.CD_MEDICO = value;
  }

  get ie_sexo() {
    return this.props.IE_SEXO;
  }

  private set ie_sexo(value: "F" | "M") {
    this.props.IE_SEXO = value;
  }

  get ie_status() {
    return this.props.IE_STATUS_CHAMADO;
  }

  private set ie_status(value: "A" | "E" | "C") {
    this.props.IE_STATUS_CHAMADO = value;
  }

  get ie_tipo_chamado() {
    return this.props.IE_TIPO_CHAMADO;
  }

  private set ie_tipo_chamado(value: "I" | "P") {
    this.props.IE_TIPO_CHAMADO = value;
  }

  get nm_paciente() {
    return this.props.NM_PACIENTE;
  }

  private set nm_paciente(value: string) {
    this.props.NM_PACIENTE = value;
  }

  get nr_chamado() {
    return this.props.NR_CHAMADO;
  }

  private set nr_chamado(value: number) {
    this.props.NR_CHAMADO = value;
  }
}
