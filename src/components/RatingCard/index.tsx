import Image from "next/image";
import { Avatar } from "../Avatar";
import { Container, Header, Frame, ToggleShowMoreButton } from "./styles";
import { RatingStart } from "../RatingStart";
import { Book, Rating, User, } from "@prisma/client";
import emptyuser from '@/src/assets/emptyuser.jpg'
import Link from "next/link";
import { useToggleShowMore } from "@/src/hooks/useToggleShowMore";

export type RatingUserBook = Rating & {
  user: User
  book: Book
}

export type RatingCardProps = {
  rating: RatingUserBook
}

const MAX_LENGTH = 200


export function RatingCard({rating}: RatingCardProps) {
  
  const {text, isShowMore, toggleShowMore} = useToggleShowMore(rating?.book.summary, MAX_LENGTH)
  return (
    <Container>
      <div>
        <Header>
          <Link href={`/perfil/${rating?.user.id}`}><Avatar src={rating?.user.avatar_url ?? emptyuser} alt={'Foto '+ rating?.user.name ?? 'Anonymus'} /></Link>
          <div>
          <p>{rating?.user?.name ?? 'Anonymus'}</p>
          <span>{new Date(rating?.created_at).getHours()}</span>
          </div>
        </Header>

        <RatingStart size={16} valueRating={rating?.rate}/>
      </div>

      <Frame>
        <div>
        <Link href={`/explorer?book=${rating?.book.id}`}><Image
          height={152}
          width={108}
          src={rating?.book.cover_url}
          alt="CARD"
        /></Link>

        </div>

        <div>
        <h2>{rating?.book.name}</h2>
        <span>{rating?.book.author}</span>
        <p>{text}
        {rating?.book.summary.length > MAX_LENGTH && (
              <ToggleShowMoreButton onClick={toggleShowMore}>
                {isShowMore ? "ver menos" : "ver mais"}
              </ToggleShowMoreButton>)}
        
        </p>
        </div>

    
      </Frame>
    </Container>
  );
}
