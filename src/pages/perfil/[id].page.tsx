import { DefaultLayout } from "@/src/components/defaultLayout";
import { PageTitle } from "../../components/pagetittle";
import { MagnifyingGlass, User } from "phosphor-react";
import { NextPageWithLayout } from "../_app.page";
import { Container, BoxProfile, Retangulo, Content, ButtonBack } from "./styles";
import { Avatar } from "@/src/components/Avatar";
import { InputSearch } from '@/src/components/Input'
import { FrameInfo } from "@/src/components/FrameInfo";
import {Binoculars, CaretLeft} from 'phosphor-react'

import { api } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client";


import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { PerfilRatingCard } from "@/src/components/PerfilRatingCard";
import { useMemo, useState } from "react";

export type PerfilRatingProps = Rating &{
    book: Book & {
      categories: CategoriesOnBooks & {
        category: Category
      }[]
    }
}

type PerfilProps = {
  user: {
    avatar_url: string,
    name: string,
    member_since: Date
  },
  readPages: number,
  ratedBooks: number,
  readAuthors: number
  mostReadCategory?: string,
  ratings: PerfilRatingProps[]
}

const Perfil: NextPageWithLayout = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const userId = router.query.id as string
  
  const { data: session } = useSession();

  const isOwnProfile = session?.user?.id === userId;



 
  const {data} = useQuery<PerfilProps>({queryKey: ['perfil-latest', userId], queryFn: async () => {
    
    const {data} = await api.get(`/books/perfil/${userId}`)
    return data ?? {}
  },
  enabled: !!userId
})

const filteredRatings = useMemo(() => {
  return data?.ratings.filter(rating => {
    return rating.book.name.toLowerCase().includes(search.toLowerCase())
  })
}, [data?.ratings, search])

 

  return (

    <Container>
  {!data ? <h1>Carregando...</h1> :
    <>
      <div>
        
       {!isOwnProfile ? <ButtonBack href="/inicio"><CaretLeft size={20}/> Voltar</ButtonBack>: <PageTitle title="Perfil" icon={<User size={32} />}/>}

        <InputSearch onChange={({target})=> setSearch(target.value)} css={{maxWidth: '62.4rem'}} icon={<MagnifyingGlass size={20} />}/>
        <Content>
        {filteredRatings?.map((rating) => {
          return (
            <PerfilRatingCard key={rating.book.id} rating={rating}/>
          )
        })}

      {filteredRatings && filteredRatings.length <= 0 && (
          <>
            <h1>
              {search ? "Nenhum resultado encontrado" : "Nenhuma avaliação encontrada"}
            </h1>
          </>
        )}

        </Content>
     
      
      </div>
      <div>

        
      <BoxProfile>
        <div>  
        <Avatar size="lg" alt={`Foto de ${data?.user.name}`} src={data?.user?.avatar_url!}/>
        <p>{data?.user.name}</p>
        <span>{`Membro desde de ${new Date(data?.user.member_since).getFullYear()}`}</span>
          
        </div>

        <Retangulo></Retangulo>

        <div>
        <FrameInfo icon={<Binoculars size={32}/>} value={data?.readPages} title="Páginas lidas" />
        <FrameInfo icon={<Binoculars size={32}/>} value={data?.ratedBooks} title="Livros Avaliados" />
        <FrameInfo icon={<Binoculars size={32}/>} value={data?.readAuthors} title="Autores lidos" />
        {data?.mostReadCategory && <FrameInfo icon={<Binoculars size={32}/>} value={data.mostReadCategory} title="Categoria mais lida" />}
        </div>
      
        
      </BoxProfile>

      </div>
  
      </>}
    </Container>
    
    
    );
};

Perfil.getLayout = (page) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>;
};

export default Perfil;
