import Image from "next/image";

import { useSession } from "next-auth/react";
import { CardContainer, BoxOne } from "./styles"
import emptyuser from '../../assets/emptyuser.jpg'
import { Avatar } from "../avatar";

export function CardBox(){
    
  const {data} = useSession()

  const userAvatar = data?.user.avatar_url ?? emptyuser
  const userName = data?.user.name ?? 'Anonymus'


 
  
    return(
        <CardContainer>         
        <BoxOne>
          <div>
            <Avatar src={userAvatar} alt={`perfil de ${userName}`} />
            <p>{userName}</p>
            <span>Hoje</span>
          </div>

          <div>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
          </div>
        </BoxOne>

        <div>
          <Image
            height={152}
            width={108}
            src="https://marketplace.canva.com/EAFLe92Oed0/1/0/251w/canva-0vQILA5gRW8.jpg"
            alt="CARD"
          />
          <h2>O Hobbit</h2>
          <span>J.R.R Tokleien</span>
          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec
            et aenean posuere amet ultrices. Cras fermentum id pulvinar
            varius leo a in. Amet libero pharetra nunc elementum fringilla
            velit ipsum. Sed vulputate massa velit nibh... ver mais
          </p>
        </div>
      </CardContainer>
    )
}