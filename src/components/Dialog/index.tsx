import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  BookContainer,
  ContentOne,
  ContentTwo,
} from "./styles";
import Image from "next/image";
import { BookOpen, BookmarkSimple, X } from "phosphor-react";

import { ReactNode, useState } from "react";
import { RatingStart } from "../RatingStart";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";

import { BookRatings } from "../BookRatings";



export type DialogProps = {
  children: ReactNode;
  bookId: string;
};

type BookDetails = {

}



export const DialogBook = ({ children, bookId }: DialogProps) => {
  const [open, setOpen] = useState(false);

  const { data: book } = useQuery<any>({
    queryKey: ["expand-explorer"],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${bookId}`);

      return data ?? {};
    },
    enabled: open,
  });

  const categoriesEdited =
    book?.categories?.map((x: { category: { name: any; }; }) => x?.category?.name)?.join(", ") ?? "";

  const ratingsLength = book?.ratings?.length ?? 0   

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
          {!book ? (
            <h1>Carregando....</h1>
          ) : (
            <>
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

    
                    <RatingStart valueRating={book?.avgRating} />
                    <span>{ratingsLength} {ratingsLength === 1 ? "avaliação" : "avaliações"}</span>
    
       
                  </div>
                </ContentOne>

                <ContentTwo>
                  <div>
                    <BookmarkSimple size={24} />
                    <div>
                      <p>Categoria</p>

                      <span>{categoriesEdited}</span>
                    </div>
                  </div>
                  <div>
                    <BookOpen size={24} />
                    <div>
                      <span>Páginas</span>
                      <p>{book?.total_pages}</p>
                    </div>
                  </div>
                </ContentTwo>
              </BookContainer>
              <BookRatings bookId={bookId} bookData={book?.ratings}/>
            </>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
