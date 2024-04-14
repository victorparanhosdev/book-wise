import Image from "next/image";

import { useSession } from "next-auth/react";
import { CardContainer, BoxOne } from "./styles"

export function CardBox(){
    
  const {data} = useSession()

  
    return(
        <CardContainer>         
        <BoxOne>
          <div>
            <Image
              height={40}
              width={40}
              src={data?.user.avatar_url!}
              alt={`perfil de ${data?.user.name}`}
            />
            <p>{data?.user.name}</p>
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