import { ChartLineUp, Binoculars, User, SignIn } from "phosphor-react";
import { HomeContainer, SideBarContainer, PageTitle, Menu, Button } from "./styles";
import Image from "next/image";

import BookHeart from '../../assets/mdi_book-heart-outline.svg'

export default function Home() {
    return (
      <HomeContainer>
          <SideBarContainer>
            
          <Menu>
            <h1>
            <Image width={24} height={24} alt="" src={BookHeart}/>
            BookWise
            </h1>

            <ul>
              <li><button><ChartLineUp size={24}/>Inicio</button></li>
              <li><button><Binoculars size={24}/>Explorer</button></li>
              <li><button><User size={24}/>Perfil</button></li>
            </ul>
        


            </Menu>
            <Button>Fazer login <SignIn size={20}/></Button>
            
          </SideBarContainer>
          <div>
            <PageTitle><ChartLineUp size={32}/>Inicio</PageTitle>

            <div>

              <div>
                <h2>Avaliações mais recentes</h2>
                <div>
                  <div>

                    <div>
                      <Image height={40} width={40} src="https://avatars.githubusercontent.com/u/96530960?v=4" alt="perfil git" />
                      <p>Victor Paranhos</p>
                      <span>Hoje</span>

                    </div>

                    <div><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span></div>

                  </div>

                  <div>
                    <Image height={152} width={108} src="https://marketplace.canva.com/EAFLe92Oed0/1/0/251w/canva-0vQILA5gRW8.jpg" alt="CARD" />
                    <h2>O Hobbit</h2>
                    <span>J.R.R Tokleien</span>
                    <p>Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais</p>



                  </div>



                </div>


              </div>

              <div></div>



            </div>

          </div>
   
      </HomeContainer>
    )
  }
  