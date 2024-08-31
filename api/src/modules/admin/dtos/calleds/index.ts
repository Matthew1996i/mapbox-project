export interface CalledDTO {
  NR_CHAMADO?: number;
  IE_TIPO_CHAMADO: "I" | "P";
  NM_PACIENTE: string;
  IE_SEXO: "F" | "M";
  IE_STATUS_CHAMADO: "A" | "E" | "C";
  CD_MEDICO: number;
  CD_HOSPITAL: number;
}
