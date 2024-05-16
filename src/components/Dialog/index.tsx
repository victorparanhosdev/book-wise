
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

import { ReactNode, useEffect, useState } from "react";
import { RatingStart } from "../RatingStart";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";

import {BookRatings } from "../BookRatings";
import { Book, CategoriesOnBooks, Category, Rating, User } from "@prisma/client";
import { Loading } from "../Loading";
import { useRouter } from "next/router";



export type DialogProps = {
  children: ReactNode;
  bookId: string;
};

export type CategoriesOnBooksProps = CategoriesOnBooks & {
  category: Category
}

export type RatingsProps = Rating & {
  user: User
}

export type BookDetails = Book & {
  categories: CategoriesOnBooksProps[]
  ratings: RatingsProps[]
  avgRating: number
}



export const DialogBook = ({ children, bookId }: DialogProps) => {
  const [open, setOpen] = useState(false);

  const router = useRouter()
  //const paramBookId = router.query.book as string;


  const { data: book } = useQuery<BookDetails>({
    queryKey: ["expand-explorer", bookId],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${bookId}`);

      return data ?? {};
    },
    enabled: open,
  });

  const categoriesEdited =
    book?.categories?.map((x) => x?.category?.name)?.join(", ") ?? "";

  const ratingsLength = book?.ratings?.length ?? 0   

  /*const onOpenChange = (open: boolean)=> {
      if(open) {
        router.push(`/explorer?book=${bookId}`, undefined, {shallow: true})
      }else {
        router.push('/explorer', undefined, {shallow: true})
      }

      setOpen(open)
  }

  useEffect(() => {
    if (paramBookId === bookId) {
      setOpen(true);
    }
  }, [bookId, paramBookId])

*/
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
            <Loading/>
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

    
                    <RatingStart size={16} valueRating={book?.avgRating} />
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
