import * as Dialog from "@radix-ui/react-dialog";
import {
  Comments,
  DialogClose,
  DialogContent,
  DialogOverlay,
  ItemList,
  List,
  TitleComents,
  BookContainer,
  ContentOne,
  ContentTwo,
} from "./styles";
import Image from "next/image";
import { BookOpen, BookmarkSimple, X } from "phosphor-react";
import { Avatar } from "../Avatar";
import { ReactNode, useState } from "react";
import { RatingStart } from "../RatingStart";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";
import { Book } from "@prisma/client";

type DialogProps = {
  children: ReactNode
  bookId: string
};

export const DialogBook = ({ children, bookId }: DialogProps) => {
  const [open, setOpen] = useState(false)

  const {data: book} = useQuery<Book>({queryKey: ['expand-explorer'], queryFn: async()=> {
    const {data} = await api.get(`/books/details/${bookId}`)

    return data ?? {}
  },
  enabled: open
  })

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <div>
            <DialogClose>
              <X size={24} />
            </DialogClose>
          </div>

          <BookContainer>
            <ContentOne>
              <div>
                <Image
                  width={80}
                  height={80}
                  src={book?.cover_url!}
                  alt={`Imagem de ${book?.name}`}
                />
              </div>
              <div>
                <h1>{book?.name}</h1>
                <span>{book?.author}</span>

                <RatingStart valueRating={5} />
              </div>
            </ContentOne>

            <ContentTwo>
              <div>
                <BookmarkSimple size={24} />
                <div>
                  <span>Categoria</span>
                  <p>Computação, educação</p>
                </div>
              </div>
              <div>
                <BookOpen size={24} />
                <div>
                  <span>Páginas</span>
                  <p>160</p>
                </div>
              </div>
            </ContentTwo>
          </BookContainer>

          
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
                    <RatingStart valueRating={4} />
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
    </Dialog.Root>
  );
};
