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
import { Loading } from "@/src/components/Loading";

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
  mostReadCategory?: string | undefined,
  ratings: PerfilRatingProps[]
}

const Perfil: NextPageWithLayout = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const userId = router.query.id as string
  
  const { data: session } = useSession();

  const isOwnProfile = session?.user?.id === userId;



 
  const {data: profile} = useQuery<PerfilProps>({queryKey: ['perfil-latest', userId], queryFn: async () => {
    
    const {data} = await api.get(`/books/perfil/${userId}`)
    return data ?? {}
  },
  enabled: !!userId
})

const filteredRatings = useMemo(() => {
  return profile?.ratings.filter(rating => {
    return rating.book.name.toLowerCase().includes(search.toLowerCase())
  })
}, [profile?.ratings, search])



  return (

    <Container>

 
      <div>
       {!isOwnProfile ? <ButtonBack href="/inicio"><CaretLeft size={20}/> Voltar</ButtonBack>: <PageTitle title="Perfil" icon={<User size={32} />}/>}
        <InputSearch onChange={({target})=> setSearch(target.value)} css={{maxWidth: '62.4rem'}} icon={<MagnifyingGlass size={20} />}/>
        <Content>
        {filteredRatings?.map((rating) => {
          return (
            <PerfilRatingCard key={rating.book.id} rating={rating}/>
          )
        })}

      {filteredRatings && filteredRatings?.length <= 0 && (
          <>
            <h1>
              {search ? "Nenhum resultado encontrado" : "Nenhuma avaliação encontrada"}
            </h1>
          </>
        )}

        </Content>
     
      
      </div>
      <div>

        
      {!!profile ? <BoxProfile>
        <div>  
        <Avatar size="lg" alt={`Foto de ${profile?.user.name}`} src={profile?.user?.avatar_url!}/>
        <p>{profile?.user.name}</p>
        <span>{`Membro desde de ${new Date(profile?.user.member_since).getFullYear()}`}</span>
          
        </div>

        <Retangulo></Retangulo>

        <div>
        <FrameInfo icon={<Binoculars size={32}/>} value={profile?.readPages} title="Páginas lidas" />
        <FrameInfo icon={<Binoculars size={32}/>} value={profile?.ratedBooks} title="Livros Avaliados" />
        <FrameInfo icon={<Binoculars size={32}/>} value={profile?.readAuthors} title="Autores lidos" />
        {profile?.mostReadCategory && <FrameInfo icon={<Binoculars size={32}/>} value={profile?.mostReadCategory} title="Categoria mais lida" />}
        </div>
      
        
      </BoxProfile>: <Loading/> }

      </div>
  
    
    </Container>
    
    
    );
};

Perfil.getLayout = (page) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>;
};

export default Perfil;
