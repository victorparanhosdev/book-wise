import { ChartLineUp, CaretRight, X } from "phosphor-react";
import { PageTitle } from "../../components/pagetittle";
import { DefaultLayout } from "@/src/components/defaultLayout";
import { NextPageWithLayout } from "../_app.page";
import { Content, TitleAvaliacao, ContentRight, Section } from "./styles";
import { RatingCard, RatingUserBook } from "@/src/components/RatingCard";
import { CardLivros } from "@/src/components/cardlivros";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { api } from "@/src/lib/axios";
import { Book, Rating } from "@prisma/client";
import { LatestUserRating } from "@/src/components/LatestUserRating";
import { Loading } from "@/src/components/Loading";

export type PopBooks = Book & {
  avgRating: number;
  alreadyRead: boolean
  ratings: number

};

export type UserLatestProps = Rating & {
  book: Book;
};

const Home: NextPageWithLayout = () => {
  const { data: ratings } = useQuery<RatingUserBook[]>({
    queryKey: ["ratings-latest"],
    queryFn: async () => {
      const { data } = await api.get("/ratings/latest");
      return data?.ratings ?? [];
    },
  });

  const { data: latestUserRating } = useQuery<UserLatestProps>({
    queryKey: ["latest-user-rating"],
    queryFn: async () => {
      const { data } = await api.get("/ratings/user-latest");
      return data ?? null;
    },
  });



  const { data: books } = useQuery<PopBooks[]>({
    queryKey: ["popular-books"],
    queryFn: async () => {
      const { data } = await api.get("/books/popular");

      return data ?? [];
    },
  });

  return (
    <main>
      <PageTitle title="Inicio" icon={<ChartLineUp size={32} />} />
      <Content>
        {!ratings ? <Loading /> : <><div>
          {latestUserRating && <LatestUserRating key={latestUserRating.id} latestUserBook={latestUserRating}/>}
          <TitleAvaliacao>Avaliações mais recentes</TitleAvaliacao>
          <Section>
            {ratings?.map((rating: RatingUserBook) => {
              return <RatingCard key={rating.id} rating={rating} />;
            })}
          </Section>
        </div>

        <ContentRight>
          <div>
            <TitleAvaliacao>Livros Populares</TitleAvaliacao>

            <Link href="/explorer">
              Ver todos <CaretRight size={16} />
            </Link>
          </div>

          <div>
            {books?.map((book: PopBooks) => {
              return <CardLivros key={book.id} size="sm" popbook={book} />;
            })}
          </div>
        </ContentRight></>}
      </Content>
    </main>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default Home;
