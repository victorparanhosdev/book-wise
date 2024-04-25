import { SideBarContainer, Button, Menu, NavLinkButton } from "./styles";
import { Binoculars, User, SignIn, ChartLineUp, SignOut } from "phosphor-react";
import BookHeart from '../../assets/mdi_book-heart-outline.svg'
import Image from "next/image";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "../Avatar";
export function SideBar(){

    const router = useRouter()
    const {data} = useSession()

    const user = data?.user

    return(
        <SideBarContainer>
            
        <Menu>
          <h1>
          <Image width={24} height={24} alt="" src={BookHeart}/>
          BookWise
          </h1>

          <ul>
            <li><NavLinkButton href='/inicio' active={router.asPath === '/inicio'}><ChartLineUp size={24}/>Inicio</NavLinkButton></li>
            <li><NavLinkButton href='/explorer' active={router.asPath === '/explorer'}><Binoculars size={24}/>Explorer</NavLinkButton></li>
            {user ? <li><NavLinkButton href='/perfil' active={router.asPath === '/perfil'}><User size={24}/>Perfil</NavLinkButton></li> : null}
          </ul>

          </Menu>
         {!user ? <Button href="/"> Fazer login <SignIn size={20}/></Button> : <Button href="" onClick={()=> signOut()}><Avatar size="sm" alt={`Perfil de ${user?.name!}`} src={user?.avatar_url!}/>{user?.name.split(' ')[0]}<SignOut color="#F75A68" size={20}/></Button> }               
        
        </SideBarContainer>
    )
}


