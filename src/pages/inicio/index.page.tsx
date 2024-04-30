import { ChartLineUp, CaretRight, X } from "phosphor-react";
import { PageTitle } from "../../components/pagetittle";
import { DefaultLayout } from "@/src/components/defaultLayout";
import { NextPageWithLayout } from "../_app.page";
import { Content, TitleAvaliacao, ContentRight, Section } from "./styles";
import { RatingCard, RatingUserBook } from "@/src/components/RatingCard";
import { CardLivros } from "@/src/components/cardlivros";
import {useQuery} from '@tanstack/react-query'
import Link from "next/link";
import { api } from "@/src/lib/axios";
import { Book } from "@prisma/client";

export type PopBooks = Book & {
  avgRating: number
}



const Home: NextPageWithLayout = () => {
  const {data: ratings} = useQuery<RatingUserBook[]>({queryKey: ['ratings-latest'], queryFn: async () => {
    const {data} = await api.get('/ratings/latest')
    return data?.ratings ?? []
  }})

  const {data: books} = useQuery<PopBooks[]>({queryKey: ['popular-books'], queryFn: async ()=> {
    const {data} = await api.get('/books/popular')
    
    return data ?? []
  }})


  console.log(books)

  return (
    <main>
      <PageTitle title="Inicio" icon={<ChartLineUp size={32} />} />
      <Content>
        <div>
          <TitleAvaliacao>Avaliações mais recentes</TitleAvaliacao>
          <Section>

           {ratings?.map((rating: RatingUserBook) => {
            return(
              <RatingCard key={rating.id} rating={rating}/>
            )
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
            {<h1>Carregando</h1> && books?.map((book: PopBooks) => {
              return (
                <CardLivros key={book.id} popbook={book}/>
              )
            })}
        
          </div>
        </ContentRight>
      </Content>
    </main>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default Home;
