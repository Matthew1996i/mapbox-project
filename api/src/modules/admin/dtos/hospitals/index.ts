export interface HospitalDTO {
  CD_HOSPITAL?: number;
  NM_HOSPITAL: string;
  NR_LATITUDE: number;
  NR_LONGITUDE: number;
}

export interface CreateHospitalDTO {
  NM_HOSPITAL: string;
  NR_LATITUDE: number;
  NR_LONGITUDE: number;
}
