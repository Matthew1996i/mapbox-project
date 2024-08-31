import { useQuery } from "react-query";

import { api } from "../../services/api";
import { CalledsProps } from "./@types";

export async function getCalleds(): Promise<CalledsProps[]> {
  const response = await api.get("calleds");

  const calleds = response.data.map((data: CalledsProps) => {
    return {
      ...data,
    } as CalledsProps;
  });

  return calleds;
}

export function useCalleds() {
  const calleds = useQuery<CalledsProps[]>(
    ["get_calleds"],
    () => getCalleds(),
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  return calleds;
}
