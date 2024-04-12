import { SideBarContainer, Button, Menu, NavLinkButton } from "./styles";
import { Binoculars, User, SignIn, ChartLineUp } from "phosphor-react";

import BookHeart from '../../assets/mdi_book-heart-outline.svg'
import Image from "next/image";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export function SideBar(){

    const router = useRouter()
    const {status, data} = useSession()

    const handleSignOut = () => {

     
        signOut()
    
      router.push('/signin')
     
    }

    return(
        <SideBarContainer>
            
        <Menu>
          <h1>
          <Image width={24} height={24} alt="" src={BookHeart}/>
          BookWise
          </h1>

          <ul>
            <li><NavLinkButton href='/' active={router.asPath === '/'}><ChartLineUp size={24}/>Inicio</NavLinkButton></li>
            <li><NavLinkButton href='/explorer' active={router.asPath === '/explorer'}><Binoculars size={24}/>Explorer</NavLinkButton></li>
            <li><NavLinkButton href='/profile' active={router.asPath === '/profile'}><User size={24}/>Perfil</NavLinkButton></li>
          </ul>

          </Menu>
          {status === 'unauthenticated' ? <Button onClick={handleSignOut}> Fazer login <SignIn size={20}/></Button> : <Button onClick={()=> signOut()} active="authenticated"><Image src={data?.user.avatar_url!} alt="perfil" height={24} width={24}/>{data?.user.name.split(" ")[0]} <SignIn size={20}/></Button>}
 
          
        </SideBarContainer>
    )
}


