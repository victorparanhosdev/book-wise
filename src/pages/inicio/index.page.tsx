import { ChartLineUp, CaretRight, X } from "phosphor-react";
import { PageTitle } from "../../components/pagetittle";
import * as Dialog from '@radix-ui/react-dialog';
import { DefaultLayout } from "@/src/components/defaultLayout";
import { NextPageWithLayout } from "../_app.page";

import {
  Content,
  TitleAvaliacao,
  ContentRight,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogClose
} from "./styles";
import { CardBox } from "@/src/components/bookscards";
import { CardLivros } from "@/src/components/cardlivros";
import { BookDetails } from "@/src/components/bookdetails";

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
            <DialogTrigger>Ver todos <CaretRight size={16} /></DialogTrigger>
       
          </div>

          <div>
            <CardLivros />
            <CardLivros />
            <CardLivros />
            <CardLivros />
          </div>
        </ContentRight>
      </Content>
        
      <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
              <DialogClose>
                <X size={24}/>
              </DialogClose>
              <div>
              <BookDetails />
              </div>
         
            

            </DialogContent>
      </Dialog.Portal>
    </main>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default Home;
