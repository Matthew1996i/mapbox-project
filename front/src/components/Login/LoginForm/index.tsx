import {
  Button,
  CloseIcon,
  Image,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

import Logo from "../../../../src/assets/images/logo.png";
import { api } from "../../../services/api";
import { ImageContainer } from "./Style";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const loginExecute = useMutation(
    async (data: FormValues) => {
      const response = await api.post("sessions", data);
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
      sessionStorage.setItem("sessions", JSON.stringify(response.data));

      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: data.email },
      });
    },
    {
      onSuccess: () => {
        navigate("/main");
      },
      onError: () => {
        showNotification({
          autoClose: 3000,
          title: "Erro ao fazer login",
          message: "Email ou senha incorreto",
          color: "red",
          icon: <CloseIcon />,
          loading: false,
          style: { border: "1px solid #ff0000;" },
        });
      },
    }
  );

  const handleLogin: SubmitHandler<FormValues> = async (values) => {
    await loginExecute.mutateAsync(values);
  };

  return (
    <>
      <ImageContainer>
        <Image radius="md" src={Logo} />
      </ImageContainer>
      <TextInput
        id="email-input"
        label={"Email"}
        placeholder={"Insira o email"}
        size="md"
        type="email"
        color="#fff"
        {...register("email")}
      />
      <PasswordInput
        id="password-input"
        label={"Password"}
        mt="md"
        placeholder={"Insira a senha"}
        size="md"
        {...register("password")}
      />

      <Button
        color="#EC6726"
        fullWidth
        onClick={handleSubmit(handleLogin)}
        mt="xl"
        size="md"
        type="button"
        variant="filled"
      >
        {"Entrar"}
      </Button>
    </>
  );
}
