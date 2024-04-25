import Image from "next/image";
import { Avatar } from "../Avatar";
import { Container, Header, Frame } from "./styles";
import { RatingStart } from "../RatingStart";
import { Book, Rating, User, } from "@prisma/client";
import emptyuser from '@/src/assets/emptyuser.jpg'
import Link from "next/link";
export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
}

export function RatingCard({rating}: RatingCardProps) {
  return (
    <Container>
      <div>
        <Header>
          <Link href={`/perfil${rating?.user_id}`}><Avatar src={rating?.user?.avatar_url ?? emptyuser} alt={'Foto '+ rating?.user?.name ?? 'Anonymus'} /></Link>
          <div>
          <p>{rating?.user?.name ?? 'Anonymus'}</p>
          <span>Hoje</span>
          </div>
        </Header>

        <RatingStart />
      </div>

      <Frame>
        <div>

        <Image
          height={152}
          width={108}
          src="https://marketplace.canva.com/EAFLe92Oed0/1/0/251w/canva-0vQILA5gRW8.jpg"
          alt="CARD"
        />
        </div>

        <div>
        <h2>O Hobbit</h2>
        <span>J.R.R Tokleien</span>
        <p>
          Semper et sapien proin vitae nisi. Feugiat neque integer donec et
          aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a
          in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
          vulputate massa velit nibh
        </p>
        </div>

    
      </Frame>
    </Container>
  );
}
