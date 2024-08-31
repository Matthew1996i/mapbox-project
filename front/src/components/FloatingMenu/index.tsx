import { Button, Divider, Menu } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { FaListUl as CalledIcon, FaPlus as PlusIcon } from "react-icons/fa";
import CalledList from "../CalledsList";
import CalledForm from "../CalledsForm";

export default function FloatingMenu() {
  const modals = useModals();

  const calledsModal = () =>
    modals.openModal({
      title: (
        <div>
          <div className="flex items-center justify-between my-3">
            <div className="text-xl font-bold">Chamados</div>
          </div>
          <Divider />
        </div>
      ),
      size: "xl",
      children: <CalledList />,
    });

  const createCalledsModal = () =>
    modals.openModal({
      title: (
        <div>
          <div className="flex items-center justify-between my-3">
            <div className="text-xl font-bold">Novo Chamado</div>
          </div>
          <Divider />
        </div>
      ),
      size: "xl",
      children: <CalledForm />,
    });

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button style={{ backgroundColor: "#EC6726" }}>Opções</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Chamados</Menu.Label>
        <Menu.Item
          leftSection={<CalledIcon size={12} />}
          onClick={calledsModal}
        >
          Todos os chamados
        </Menu.Item>
        <Menu.Item
          leftSection={<PlusIcon size={12} />}
          onClick={createCalledsModal}
        >
          Novo chamado
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
