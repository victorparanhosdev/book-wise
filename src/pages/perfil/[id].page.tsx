import { DefaultLayout } from "@/src/components/defaultLayout";
import { PageTitle } from "../../components/pagetittle";
import { MagnifyingGlass, User } from "phosphor-react";
import { NextPageWithLayout } from "../_app.page";
import { Container, BoxProfile, Retangulo, Content } from "./styles";
import { Avatar } from "@/src/components/Avatar";
import { InputSearch } from '@/src/components/Input'
import { FrameInfo } from "@/src/components/FrameInfo";
import {Binoculars} from 'phosphor-react'
import { RatingCard, RatingUserBook } from "@/src/components/RatingCard";
import { api } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client";
import { useSession } from "next-auth/react";
import { getRelativeTimeString } from "@/src/utils/getRelativeTimeString";

type PerfilProps = {
  user: {
    avatart_url: string,
    name: string,
    member_since: Date
  },
  readPages: number,
  ratedBooks: number,
  readAuthors: number
  mostReadCategory: string,
  ratings: Rating &{
    book: Book & {
      categories: CategoriesOnBooks & {
        category: Category
      }[]
    }
  }[]
}

const Perfil: NextPageWithLayout = () => {

  const { data: session } = useSession();

  const userId = session?.user.id

  const {data} = useQuery<PerfilProps>({queryKey: ['perfil-latest'], queryFn: async () => {

    const {data} = await api.get(`/books/perfil/${userId}`)
    return data
  }})

 


  return (
    <Container>
      <div>
        <PageTitle title="Perfil" icon={<User size={32} />}/>

        <InputSearch css={{maxWidth: '62.4rem'}} icon={<MagnifyingGlass size={20} />}/>
        <Content>
        {data?.ratings?.map((rating) => {
          return (
            <h1 key={rating.book.id}>Card</h1>
          )
        })}

        </Content>
     
      
      </div>
      <div>

 
     {data && <BoxProfile>
        <div>  
        <Avatar size="lg" alt={`Foto de ${data?.user.name}`} src={data?.user.avatart_url}/>
        <p>{data?.user.name}</p>
        <span>{`Membro desde de ${new Date(data?.user.member_since).getFullYear()}`}</span>
          
        </div>

        <Retangulo></Retangulo>

        <div>
        <FrameInfo icon={<Binoculars size={32}/>} value={data?.readPages} title="Páginas lidas" />
        <FrameInfo icon={<Binoculars size={32}/>} value={data?.ratedBooks} title="Livros Avaliados" />
        <FrameInfo icon={<Binoculars size={32}/>} value={data?.readAuthors} title="Autores lidos" />
        <FrameInfo icon={<Binoculars size={32}/>} value={data?.mostReadCategory} title="Categoria mais lida" />
        </div>
      
        
      </BoxProfile>}

      </div>
  

    </Container>

    
    );
};

Perfil.getLayout = (page) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>;
};

export default Perfil;
