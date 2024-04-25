
import { CardContainer } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { DialogContent,
  DialogOverlay,
  DialogClose,
  Comments,
  TitleComents,
  ItemList,
  List} from './styles'
import { BookDetails } from "@/src/components/bookdetails";
import { Avatar } from "@/src/components/Avatar";

import Image from "next/image";
import { X } from "phosphor-react";

export const CardLivros = () => {
  return (<>
  <Dialog.Trigger asChild>
  <CardContainer>
      <Image
        height={80}
        width={80}
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div>
        <h2>A Revolução dos bichos</h2>
        <p>George Orwell</p>

        <div>********</div>
      </div>
  </CardContainer>
  </Dialog.Trigger>

  
    <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <div>
            <DialogClose>
              <X size={24} />
            </DialogClose>
          </div>

          <BookDetails />
          <Comments>
            <TitleComents>
              <p>Avaliações</p>
              <button>Avaliar</button>
            </TitleComents>

            <List>
              <ItemList>
                <header>
                  <Avatar
                    alt={`foto perfil de victor`}
                    src="https://github.com/victorparanhosdev.png"
                  />
                  <div>
                    <h2>Brandom Botosh</h2>
                    <span>Há 2 dias</span>
                  </div>
                  <div>
                    <span>******</span>
                  </div>
                </header>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor qui maiores fugit deleniti! Fuga, itaque, aliquid atque
                  sint molestias voluptas perferendis provident asperiores nisi
                  recusandae tempora animi assumenda aut incidunt.
                </p>
              </ItemList>
            </List>
          </Comments>
        </DialogContent>
    </Dialog.Portal>

  </>
    
    
  );
}
