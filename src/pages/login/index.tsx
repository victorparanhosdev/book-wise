import { Container, SectionLogo, BoxLogin } from "./styles";
import Image from "next/image";

import BookHeart from "@/src/assets/mdi_book-heart-outline.svg";
import {NextPageWithLayout} from '@/src/pages/_app.page'
import { NextSeo } from "next-seo";

import { AuthButtons } from "@/src/components/AuthButtons";


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
          <AuthButtons canGuest/>
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