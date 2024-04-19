import { ChartLineUp } from "phosphor-react";
import { PageTitle } from "../../components/pagetittle";

import { DefaultLayout } from "@/src/components/defaultLayout";
import { NextPageWithLayout } from "../_app.page";

import {Content, TitleAvaliacao} from './styles'
import { CardBox } from "@/src/components/bookscards";



const Home: NextPageWithLayout = () => {


  return (
    <main>
      <PageTitle title="Inicio" icon={<ChartLineUp size={32} />}/>
      <div>
      <TitleAvaliacao>Avaliações mais recentes</TitleAvaliacao>
        <Content>
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
        </Content>

        <div></div>
      </div>
    </main>
  )
}

Home.getLayout = (page) => {

  return (
    <DefaultLayout title="Início">{page}</DefaultLayout>
  )
};

export default Home;
