import { Container, BoxLogin, Login, Button, SectionLogo } from "./styles";
import Image from "next/image";
import googleLogo from "@/src/assets/logos_google-icon.png";
import gitLogo from "@/src/assets/Clip path group.png";
import rocketLogo from "@/src/assets/RocketLaunch.png";
import BookHeart from "@/src/assets/mdi_book-heart-outline.svg";
import {NextPageWithLayout} from '@/src/pages/_app.page'
import { NextSeo } from "next-seo";


const SignIn: NextPageWithLayout = () => {
  return (
    <Container>
      <SectionLogo>
        <h1>
          <Image width={48} height={48} alt="" src={BookHeart} />
          BookWise
        </h1>
      </SectionLogo>

      <section>
        <BoxLogin>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante</p>

          <Login>
            <Button>
              <Image src={googleLogo} height={32} width={32} alt="Google" />
              Entrar com Google
            </Button>
            <Button>
              <Image src={gitLogo} height={32} width={32} alt="Github" />
              Entrar com GitHub
            </Button>
            <Button>
              <Image src={rocketLogo} height={32} width={32} alt="Visitante" />
              Acessar como visitante
            </Button>
          </Login>
        </BoxLogin>
      </section>
    </Container>
  );
}

SignIn.getLayout = (page) => {
  
  return <>
  <NextSeo title={`Login | BookWise`}/>
    {page}
  </>
}

export default SignIn