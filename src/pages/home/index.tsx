import { ChartLineUp } from "phosphor-react";
import { PageTitle } from "../../components/PageTitle";
import Image from "next/image";
import { DefaultLayout } from "@/src/components/defaultLayout";
import { NextPageWithLayout } from "../_app.page";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <PageTitle title="Inicio" icon={<ChartLineUp size={32} />}/>
      <div>
        <div>
          <h2>Avaliações mais recentes</h2>
          <div>
            <div>
              <div>
                <Image
                  height={40}
                  width={40}
                  src="https://avatars.githubusercontent.com/u/96530960?v=4"
                  alt="perfil git"
                />
                <p>Victor Paranhos</p>
                <span>Hoje</span>
              </div>

              <div>
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
              </div>
            </div>

            <div>
              <Image
                height={152}
                width={108}
                src="https://marketplace.canva.com/EAFLe92Oed0/1/0/251w/canva-0vQILA5gRW8.jpg"
                alt="CARD"
              />
              <h2>O Hobbit</h2>
              <span>J.R.R Tokleien</span>
              <p>
                Semper et sapien proin vitae nisi. Feugiat neque integer donec
                et aenean posuere amet ultrices. Cras fermentum id pulvinar
                varius leo a in. Amet libero pharetra nunc elementum fringilla
                velit ipsum. Sed vulputate massa velit nibh... ver mais
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default Home;
