import * as Dialog from "@radix-ui/react-dialog";
import { DialogOverlay, DialogContent, DialogClose } from "./styles";
import { ReactNode } from "react";
import { X } from "phosphor-react";

type DialogAvaliationProps = {
  children: ReactNode;
};

export const DialogAvaliation = ({ children }: DialogAvaliationProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <div>
            <h1>CONTEUDOOO</h1>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
