import { useQuery } from "react-query";

import { api } from "../../services/api";
import { HospitalProps } from "./@types";

export async function getHospitals(): Promise<HospitalProps[]> {
  const response = await api.get("hospitals");

  const hospitals = response.data.map((data: HospitalProps) => {
    return {
      ...data,
    } as HospitalProps;
  });

  return hospitals;
}

export function useHospitals() {
  const hospitals = useQuery<HospitalProps[]>(
    ["get_hospitals"],
    () => getHospitals(),
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  return hospitals;
}
