import Image from "next/image";
import { RatingStart } from "../RatingStart";
import { Container, BookImagem, Box, Content,Header, ContainerBook } from "./styles";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { TitleAvaliacao } from "@/src/pages/inicio/styles";
import { CaretRight } from "phosphor-react";
import { UserLatestProps } from "@/src/pages/inicio/index.page";
import { DialogBook } from "../Dialog";

type LatestUserRatingProps = {
  latestUserBook: UserLatestProps
}

export const LatestUserRating = ({latestUserBook}: LatestUserRatingProps) => {
  const { data: session } = useSession();

  const userId = session?.user?.id;

  return (
    <Container>
      <Header>
      <TitleAvaliacao>Sua última leitura</TitleAvaliacao>
        <Link href={`/perfil/${userId}`} >Ver todos <CaretRight size={16} /></Link>
      </Header>
      <DialogBook key={latestUserBook.book_id} bookId={latestUserBook.book_id}>
      <ContainerBook>
        <BookImagem>
          <Image
            width={80}
            height={80}
            src={latestUserBook.book.cover_url}
            alt={`Livro ${latestUserBook.book.name}`}
          />
        </BookImagem>

        <Content>
          <Box>
            <span>ha 2 dias</span>
            <RatingStart size={16} valueRating={latestUserBook.rate} />
          </Box>

          <h1>{latestUserBook.book.name}</h1>
          <span>{latestUserBook.book.author}</span>
          <p>
            {latestUserBook.book.summary}
          </p>
        </Content>
      </ContainerBook>
      </DialogBook>
    </Container>
  );
};
