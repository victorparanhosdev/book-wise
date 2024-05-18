import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  DialogContent,
  DialogClose,
  BoxContent,
} from "./styles";
import { ReactNode } from "react";
import { X } from "phosphor-react";
import { AuthButtons } from "../AuthButtons";


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
          <div>
            <DialogClose>
              <X size={24} />
            </DialogClose>
          </div>

          <BoxContent>
            <h1>Faça login para deixar sua avaliação</h1>
            <AuthButtons/>
          </BoxContent>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
