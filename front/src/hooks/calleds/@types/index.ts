export type CalledsProps = {
  NR_CHAMADO?: number;
  IE_TIPO_CHAMADO: "I" | "P";
  NM_PACIENTE: string;
  IE_SEXO: "F" | "M";
  IE_STATUS_CHAMADO: "A" | "E" | "C";
  CD_MEDICO: number;
  CD_HOSPITAL: number;
};

export type CreateCalledsProps = {
  IE_TIPO_CHAMADO?: "I" | "P" | null;
  NM_PACIENTE?: string;
  IE_SEXO?: "F" | "M";
  IE_STATUS_CHAMADO?: "A" | "E" | "C" | null;
  CD_MEDICO?: number | null;
  CD_HOSPITAL?: number;
};
