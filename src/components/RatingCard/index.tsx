import Image from "next/image";
import { Avatar } from "../avatar";
import { Container, Header, Frame, ToggleShowMoreButton } from "./styles";
import { RatingStart } from "../RatingStart";
import { Book, Rating, User, } from "@prisma/client";
import emptyuser from '@/src/assets/emptyuser.jpg'
import Link from "next/link";
import { useToggleShowMore } from "@/src/hooks/useToggleShowMore";
import { getRelativeTimeString } from "@/src/utils/getRelativeTimeString";
import { DialogBook } from "../Dialog";
import { useWindowSize } from "@/src/hooks/useWindowSize";


export type RatingUserBook = Rating & {
  user: User 
  book: Book
}

export type RatingCardProps = {
  rating: RatingUserBook
}




export function RatingCard({rating}: RatingCardProps) {
  const {width} = useWindowSize()
  const MAX_LENGTH = (width && width >= 430) ? 120 : 50
  const {text, isShowMore, toggleShowMore} = useToggleShowMore(rating?.book.summary, MAX_LENGTH)
  const distance = getRelativeTimeString(new Date(rating?.created_at), "pt-BR");
  return (
    <Container>
      <div>
        <Header>
          <Link href={`/perfil/${rating?.user.id}`}><Avatar src={rating?.user.avatar_url ?? emptyuser} alt={'Foto '+ rating?.user.name ?? 'Anonymus'} /></Link>
          <div>
          <p>{rating?.user?.name ?? 'Anonymus'}</p>
          <span>{distance}</span>
          </div>
        </Header>

        <RatingStart size={16} valueRating={rating?.rate}/>
      </div>

      <Frame>
        <div>
        <DialogBook bookId={rating?.book_id}><Image
          height={152}
          width={108}
          src={rating?.book.cover_url}
          alt="CARD"
        /></DialogBook>

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
