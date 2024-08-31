import { Button } from "@mantine/core";
import { useSignOut } from "react-auth-kit";
import { IoExit } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ExitButton() {
  const navigate = useNavigate();
  const singOut = useSignOut();

  const logout = () => {
    singOut();
    return navigate("/login");
  };

  return (
    <Button
      variant="light"
      color="red"
      leftSection={<IoExit fontSize={18} color="red" />}
      onClick={logout}
    >
      Sair
    </Button>
  );
}
