import { Select, SimpleGrid, TextInput } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader as MantineLoader } from "@mantine/core";
import {
  RiCheckFill as CheckIcon,
  RiCloseLine as CloseIcon,
} from "react-icons/ri";

import { CreateCalledsProps } from "../../hooks/calleds/@types";
import { useHospitals } from "../../hooks/hospitals";
import { useDoctors } from "../../hooks/doctors";

import * as yup from "yup";
import { SaveCancelButton } from "../SaveCancelButton";
import { useModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { useMutation } from "react-query";
import { getCalledTypes } from "../../utils/enums/calledType";
import { getGenderTypes } from "../../utils/enums/genderType";

type DelayProps = {
  queryPath: string;
  id?: number;
  time: number;
};

export default function CalledForm() {
  const modals = useModals();

  const { data: hospitals, isLoading: isHospitalsLoading } = useHospitals();
  const { data: doctors, isLoading: isDoctorsLoading } = useDoctors();

  const calledSchema = yup.object().shape({
    NM_PACIENTE: yup.string().required("Nome do paciente obrigatorio"),
    CD_MEDICO: yup.number().notRequired(),
    IE_SEXO: yup.string().required("Sexo do paciente obrigatorio"),
    IE_TIPO_CHAMADO: yup.string().required("Tipo do obrigatorio"),
    CD_HOSPITAL: yup.number().required("Hospital obrigatório"),
  });

  function refetchQueryListDelay({ queryPath, time }: DelayProps): void {
    setTimeout(() => {
      queryClient.refetchQueries([queryPath]);
    }, time);
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateCalledsProps>({
    resolver: yupResolver(calledSchema),
    defaultValues: {
      IE_STATUS_CHAMADO: "A",
      CD_MEDICO: null,
    },
  });

  const createCalled = useMutation(
    async (data: CreateCalledsProps) => {
      await api.post("calleds", {
        ...data,
      });

      refetchQueryListDelay({
        queryPath: "get_calleds",
        time: 600,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["billings"]);

        showNotification({
          autoClose: 3000,
          message: "Chamado criado com sucesso",
          color: "green",
          icon: <CheckIcon />,
          loading: false,
          style: { border: "1px solid #147233;" },
        });
      },
      onError: () => {
        showNotification({
          autoClose: 3000,
          title: "Erro ao criar o chamado",
          message: "Ocorreu um erro ao criar um novo chamado",
          color: "red",
          icon: <CloseIcon />,
          loading: false,
          style: { border: "1px solid #ff0000;" },
        });
      },
    }
  );

  const handleEdit: SubmitHandler<CreateCalledsProps> = async (values) => {
    await createCalled.mutateAsync(values);
    modals.closeAll();
  };

  if (isDoctorsLoading || isHospitalsLoading) return <MantineLoader />;

  return (
    <>
      <SimpleGrid className="mt-4 mb-4" cols={{ md: 2, sm: 1, lg: 3 }}>
        <TextInput
          className="w-full"
          label="Nome paciente"
          placeholder="Insira o nome do paciente"
          required
          {...register("NM_PACIENTE")}
          error={errors.NM_PACIENTE?.message}
        />
        <Select
          data={
            getGenderTypes() &&
            getGenderTypes().map((type) => ({
              value: String(type.value),
              label: type.name,
            }))
          }
          error={errors.IE_SEXO?.message}
          label="Sexo"
          onChange={(value) => setValue("IE_SEXO", value)}
          placeholder="Selecione o sexo do paciente"
          required
          searchable
        />
        <Select
          data={
            doctors &&
            doctors.map((doctor) => ({
              value: String(doctor.CD_MEDICO),
              label: doctor.NM_MEDICO,
            }))
          }
          error={errors.CD_MEDICO?.message}
          label="Medico"
          onChange={(value) => setValue("CD_MEDICO", Number(value))}
          placeholder="Selecione um medico"
          searchable
        />
        <Select
          data={
            hospitals &&
            hospitals.map((hospital) => ({
              value: String(hospital.CD_HOSPITAL),
              label: hospital.NM_HOSPITAL,
            }))
          }
          error={errors.CD_HOSPITAL?.message}
          label="Hospital"
          onChange={(value) => setValue("CD_HOSPITAL", Number(value))}
          placeholder="Selecione o hospital"
          required
          searchable
        />
        <Select
          data={
            getCalledTypes() &&
            getCalledTypes().map((type) => ({
              value: String(type.value),
              label: type.name,
            }))
          }
          error={errors.IE_TIPO_CHAMADO?.message}
          label="Tipo do chamado"
          onChange={(value) => setValue("IE_TIPO_CHAMADO", value)}
          placeholder="Selecione o tipo do chamado"
          required
          searchable
        />
      </SimpleGrid>
      <SaveCancelButton
        isLoading={createCalled.isLoading}
        onCancel={() => modals.closeAll()}
        onSave={handleSubmit(handleEdit)}
      />
    </>
  );
}
