import { ChartLineUp, CaretRight, X } from "phosphor-react";
import { PageTitle } from "../../components/pagetittle";

import { DefaultLayout } from "@/src/components/defaultLayout";
import { NextPageWithLayout } from "../_app.page";

import { Content, TitleAvaliacao, ContentRight, Section } from "./styles";
import { RatingCard } from "@/src/components/RatingCard";
import { CardLivros } from "@/src/components/cardlivros";

import Link from "next/link";

const Home: NextPageWithLayout = () => {
  return (
    <main>
      <PageTitle title="Inicio" icon={<ChartLineUp size={32} />} />
      <Content>
        <div>
          <TitleAvaliacao>Avaliações mais recentes</TitleAvaliacao>
          <Section>
            {Array.from({length: 20}).map((_, i) => {
              return (
                <RatingCard data={{
                  user: {
                    id: String(i),
                    name: 'Victor Paranhos Costa',
                    avatar_url: 'https://github.com/victorparanhosdev.png',
                    email: 'victor_paranho@hotmail.com',
                    created_at: new Date(),
                  },
                  rating: {
                    id: String(i),
                    rate: 3,
                    description: 'Descricao do livro aqui',
                    created_at: new Date(),
                    book_id: String(i),
                    user_id: String(i),
                  },
                  book: {
                    id: String(i),
                    name: 'Volta dos que nao foram',
                    author: 'Jose Alencar',
                    summary: 'Lorem iLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate est similique sapiente necessitatibus atque qui. Eveniet eum veritpsum dolor sit, amet consectetur adipisicing elit. Voluptate est similique sapiente necessitatibus atque qui. Eveniet eum veritLorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate est similique sapiente necessitatibus atque qui. Eveniet eum veritatis, fugiat quasi ad possimus tenetur aperiam deserunt repellendus voluptate cupiditate! Minus, dolorem!',
                    cover_url: 'https://github.com/victorparanhosdev.png',
                    total_pages: 10,
                    created_at: new Date(),
                  },
                 

                }} key={`componente-${i}`}/>
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
            <CardLivros />
            <CardLivros />
            <CardLivros />
            <CardLivros />
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
