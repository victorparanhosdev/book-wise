import * as Dialog from '@radix-ui/react-dialog';
import {Comments, DialogClose, DialogContent, DialogOverlay, ItemList, List, TitleComents} from './styles'
import { BookDetails } from '../bookdetails';
import { X } from 'phosphor-react';
import { Avatar } from '../Avatar';

export const DialogBook = () => {
    return(

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

    )
}