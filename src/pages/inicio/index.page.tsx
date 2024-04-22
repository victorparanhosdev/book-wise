import { ChartLineUp, CaretRight } from "phosphor-react";
import { PageTitle } from "../../components/pagetittle";
import * as Dialog from "@radix-ui/react-dialog";
import { DefaultLayout } from "@/src/components/defaultLayout";
import { NextPageWithLayout } from "../_app.page";

import {
  Content,
  TitleAvaliacao,
  ContentRight,
  ButtonVerTodos,
} from "./styles";
import { CardBox } from "@/src/components/bookscards";
import { CardLivros } from "@/src/components/cardlivros";

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
          <CardBox />
          <CardBox />
          <CardBox />
        </div>

        <ContentRight>
          <div>
            <TitleAvaliacao>Livros Populares</TitleAvaliacao>
            <Dialog.Trigger asChild>
            <ButtonVerTodos>
              Ver todos <CaretRight size={16} />
            </ButtonVerTodos>
            </Dialog.Trigger>
           
         

            <Dialog.Content>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description >
                Make changes to your profile.
              </Dialog.Description>
            </Dialog.Content>
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
