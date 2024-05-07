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
const Profile: NextPageWithLayout = () => {

  const {data: ratings} = useQuery<RatingUserBook[]>({queryKey: ['perfil-latest'], queryFn: async () => {
    const {data} = await api.get('/ratings/latest')
    return data?.ratings ?? []
  }})




  return (
    <Container>
      <div>
        <PageTitle title="Perfil" icon={<User size={32} />}/>

        <InputSearch css={{maxWidth: '62.4rem'}} icon={<MagnifyingGlass size={20} />}/>
        <Content>
        {ratings?.map((rating: RatingUserBook) => {
          return (
            <RatingCard rating={rating} key={rating.id}/>
          )
        })}

        </Content>
     
      
      </div>
      <div>

 
      <BoxProfile>
        <div>  
        <Avatar size="lg" alt="Foto" src="https://www.github.com/victorparanhosdev.png"/>
        <p>Nome</p>
        <span>Membro Desde 2019</span>
          
        </div>

        <Retangulo></Retangulo>

        <div>
          {Array.from({length: 4}).map((_,i)=> {
            return (
              <FrameInfo icon={<Binoculars size={32}/>} value={i+i} title={`Exemplo ${i}`} key={i}/>
            )
          })}
        </div>
      
        
      </BoxProfile>

      </div>
  

    </Container>

    
    );
};

Profile.getLayout = (page) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>;
};

export default Profile;
