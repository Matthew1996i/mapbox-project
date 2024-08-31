import { Button } from "@mantine/core";

type SaveCancelButtonProps = {
  onCancel: () => void;
  onSave: () => void;
  isLoading: boolean;
  disabled?: boolean;
};

export function SaveCancelButton({
  onSave,
  onCancel,
  isLoading,
  disabled,
}: SaveCancelButtonProps) {
  return (
    <div className="flex justify-end w-full gap-2 pt-4 mt-5">
      <Button color="red" onClick={onCancel}>
        Cancelar
      </Button>
      <Button disabled={disabled} loading={isLoading} onClick={() => onSave()}>
        Salvar
      </Button>
    </div>
  );
}
