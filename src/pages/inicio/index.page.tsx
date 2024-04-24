import { ChartLineUp, CaretRight, X } from "phosphor-react";
import { PageTitle } from "../../components/pagetittle";

import { DefaultLayout } from "@/src/components/defaultLayout";
import { NextPageWithLayout } from "../_app.page";

import {
  Content,
  TitleAvaliacao,
  ContentRight,
} from "./styles";
import { CardBox } from "@/src/components/bookscards";
import { CardLivros } from "@/src/components/cardlivros";

import Link from "next/link";

const Home: NextPageWithLayout = () => {
  return (
    <main>
      <PageTitle title="Inicio" icon={<ChartLineUp size={32} />} />
      <Content>
        <div>
          <TitleAvaliacao>Avaliações mais recentes</TitleAvaliacao>
          <CardBox />
          <CardBox />
          <CardBox />

        </div>

        <ContentRight>
          <div>
            <TitleAvaliacao>Livros Populares</TitleAvaliacao>

            <Link href="/explorer"> Ver todos <CaretRight size={16} /></Link>

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
