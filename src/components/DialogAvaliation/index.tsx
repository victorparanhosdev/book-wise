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
import { useRouter } from "next/router";

type DialogAvaliationProps = {
  children: ReactNode;
};



export const DialogAvaliation = ({ children }: DialogAvaliationProps) => {

  const router = useRouter();
  const paramBookId = router.query.book as string;

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
            <AuthButtons callbackUrl={!!paramBookId ? `/explorer?book=${paramBookId}` : '/explorer'}/>
          </BoxContent>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
