import { ScrollArea, Loader as MantineLoader } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { FaLockOpen as OpenIcon, FaLock as LockIcon } from "react-icons/fa";
import { IoClose as CloseIcon } from "react-icons/io5";

import { useCalleds } from "../../hooks/calleds";
import { CalledsProps } from "../../hooks/calleds/@types";
import { useHospitals } from "../../hooks/hospitals";
import { useDoctors } from "../../hooks/doctors";

export default function CalledList() {
  const { data: calleds, isLoading: isCalledsLoading } = useCalleds();
  const { data: hospitals, isLoading: isHospitalsLoading } = useHospitals();
  const { data: doctors, isLoading: isDoctorsLoading } = useDoctors();

  const calledStatus = {
    A: <OpenIcon size={12} color="green" />,
    E: <LockIcon size={12} color="red" />,
    C: <CloseIcon size={12} color="red" />,
  };

  const dataColumns = [
    {
      accessor: "NR_CHAMADO",
      title: "Chamado",
    },
    {
      accessor: "NM_PACIENTE",
      title: "Nome cliente",
    },
    {
      accessor: "IE_SEXO",
      title: "Sexo",

      render: (called: CalledsProps) =>
        called.IE_SEXO === "M" ? "Masculino" : "Feminino",
    },
    {
      accessor: "IE_TIPO_CHAMADO",
      title: "Tipo de chamado",
      render: (called: CalledsProps) =>
        called.IE_TIPO_CHAMADO === "I" ? "Internação" : "Pronto Socorro",
    },
    {
      accessor: "CD_HOSPITAL",
      title: "Hospital",
      render: (called: CalledsProps) =>
        hospitals?.filter(
          (hospitals) => hospitals.CD_HOSPITAL === called.CD_HOSPITAL
        )[0].NM_HOSPITAL,
    },
    {
      accessor: "CD_MEDICO",
      title: "Medico",
      render: (called: CalledsProps) =>
        called.CD_MEDICO
          ? doctors?.filter(
              (doctor) => doctor.CD_MEDICO === called.CD_MEDICO
            )[0].NM_MEDICO
          : "",
    },
    {
      accessor: "IE_STATUS_CHAMADO",
      title: "Status",
      render: (called: CalledsProps) => calledStatus[called.IE_STATUS_CHAMADO],
    },
  ];

  if (isCalledsLoading || isHospitalsLoading || isDoctorsLoading)
    return <MantineLoader />;

  return (
    <ScrollArea
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <div>
        {calleds?.length && (
          <DataTable
            withTableBorder
            borderRadius="sm"
            withColumnBorders
            striped
            highlightOnHover
            columns={dataColumns}
            records={calleds}
          />
        )}
      </div>
    </ScrollArea>
  );
}
