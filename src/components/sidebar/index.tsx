import {
  SideBarContainer,
  Button,
  Menu,
  NavLinkButton,
  MenuMobile,
  ListMenuMobile,
  AvatarAuth
} from "./styles";
import {
  Binoculars,
  User,
  SignIn,
  ChartLineUp,
  SignOut,
  TextAlignRight,
  X,
} from "phosphor-react";
import BookHeart from "../../assets/mdi_book-heart-outline.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "../avatar";
import { useWindowSize } from "../../hooks/useWindowSize";
import emptyuser from '@/src/assets/emptyuser.jpg'
import Link from "next/link";
import { useState } from "react";
export function SideBar() {
  const { width } = useWindowSize();
  const [isMenuActive, setMenuActive] = useState(false);

  const router = useRouter();
  const { data, status } = useSession();
  const userId = router.query.id as string;
  const user = data?.user;

  return (
    <SideBarContainer>
      {width && width > 430 && (
        <>
          <Menu>
            <h1>
              <Image width={24} height={24} alt="" src={BookHeart} />
              BookWise
            </h1>

            <ul>
              <li>
                <NavLinkButton
                  href="/inicio"
                  active={router.asPath === "/inicio"}
                >
                  <ChartLineUp size={24} />
                  Inicio
                </NavLinkButton>
              </li>
              <li>
                <NavLinkButton
                  href="/explorer"
                  active={
                    router.asPath === "/explorer" ||
                    router.asPath === `/explorer?book=${router?.query.book}`
                  }
                >
                  <Binoculars size={24} />
                  Explorer
                </NavLinkButton>
              </li>
              {user ? (
                <li>
                  <NavLinkButton
                    href={`/perfil/${userId ?? user.id}`}
                    active={router.asPath === `/perfil/${userId ?? user.id}`}
                  >
                    <User size={24} />
                    Perfil
                  </NavLinkButton>
                </li>
              ) : null}
            </ul>
          </Menu>
          {!user ? (
            <Button href="/">
              {" "}
              Fazer login <SignIn size={20} />
            </Button>
          ) : (
            <Button href="/inicio" onClick={() => signOut()}>
              <Avatar
                size="sm"
                alt={`Perfil de ${user?.name!}`}
                src={user?.avatar_url!}
              />
              {user?.name.split(" ")[0]}
              <SignOut color="#F75A68" size={20} />
            </Button>
          )}
        </>
      )}
      {width && width <= 430 && (
        <>
          <MenuMobile>
            <div>
              <Link href="/inicio">
                <Image width={24} height={24} alt="" src={BookHeart} />
                BookWise
              </Link>
              <div>
              {status === 'authenticated' ? <><AvatarAuth style={{marginRight: '1.5rem'}} href={`/perfil/${userId ?? user?.id}`} >
              <Avatar
                size="sm"
                alt={`Perfil de ${user?.name! ?? 'anonimo'}`}
                src={user?.avatar_url ?? emptyuser}
              />
              
              </AvatarAuth><SignOut style={{marginRight: '1.5rem'}} onClick={() => signOut()} color="#F75A68" size={24} /></> : <AvatarAuth style={{marginRight: '1.5rem'}} href="/"><User  size={24} /></AvatarAuth>}
            


              {!isMenuActive ? (
                <TextAlignRight onClick={() => setMenuActive(true)} size={32} />
              ) : (
                <X onClick={() => setMenuActive(false)} size={32} />
              )}
              </div>
            </div>
          
 
            <ListMenuMobile isMenu={isMenuActive}>
              <ul>
               <li>
                 <NavLinkButton onClick={()=> setMenuActive(false)}
                   href="/inicio"
                   active={router.asPath === "/inicio"}
                 >
                   <ChartLineUp size={24} />
                   Inicio
                 </NavLinkButton>
               </li>
               <li>
                 <NavLinkButton onClick={()=> setMenuActive(false)}
                   href="/explorer"
                   active={
                     router.asPath === "/explorer" ||
                     router.asPath === `/explorer?book=${router?.query.book}`
                   }
                 >
                   <Binoculars size={24} />
                   Explorer
                 </NavLinkButton>
               </li>
               {user ? (
                 <li>
                   <NavLinkButton onClick={()=> setMenuActive(false)}
                     href={`/perfil/${userId ?? user.id}`}
                     active={router.asPath === `/perfil/${userId ?? user.id}`}
                   >
                     <User size={24} />
                     Perfil
                   </NavLinkButton>
                 </li>
               ) : null}
             </ul>
            </ListMenuMobile>
            

     
          </MenuMobile>
        </>
      )}
    </SideBarContainer>
  );
}
