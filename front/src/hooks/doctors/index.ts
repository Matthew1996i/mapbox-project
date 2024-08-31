import { useQuery } from "react-query";

import { api } from "../../services/api";
import { DoctorsProps } from "./@types";

export async function getDoctors(): Promise<DoctorsProps[]> {
  const response = await api.get("doctors");

  const doctors = response.data.map((data: DoctorsProps) => {
    return {
      ...data,
    } as DoctorsProps;
  });

  return doctors;
}

export function useDoctors() {
  const doctors = useQuery<DoctorsProps[]>(
    ["get_doctors"],
    () => getDoctors(),
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  return doctors;
}
