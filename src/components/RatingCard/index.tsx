import Image from "next/image";
import { Avatar } from "../Avatar";
import { Container, Header, Frame, ToggleShowMoreButton } from "./styles";
import { RatingStart } from "../RatingStart";
import { Book, Rating, User, } from "@prisma/client";
import emptyuser from '@/src/assets/emptyuser.jpg'
import Link from "next/link";
import { useToggleShowMore } from "@/src/hooks/UseToggleShowMore";

export type RatingUserBook = {
  rating: Rating
  user: User
  book: Book
}

type RatingCardProps = {
  data: RatingUserBook
}



export function RatingCard({data}: RatingCardProps) {

  const {text, isShowMore, toggleShowMore} = useToggleShowMore(data?.book.summary, 180)
  return (
    <Container>
      <div>
        <Header>
          <Link href={`/perfil/${data?.user.id}`}><Avatar src={data?.user?.avatar_url ?? emptyuser} alt={'Foto '+ data?.user?.name ?? 'Anonymus'} /></Link>
          <div>
          <p>{data?.user?.name ?? 'Anonymus'}</p>
          <span>{data?.user.created_at.toISOString().slice(0, 10).replace(/-/g, '/')}</span>
          </div>
        </Header>

        <RatingStart valueRating={data?.rating.rate}/>
      </div>

      <Frame>
        <div>
        <Link href={`/explorer?book=${data?.book.id}`}><Image
          height={152}
          width={108}
          src={data.book.cover_url}
          alt="CARD"
        /></Link>

        </div>

        <div>
        <h2>{data.book.name}</h2>
        <span>{data.book.author}</span>
        <p>{text}
        {data.book.summary.length > 180 && (
              <ToggleShowMoreButton onClick={toggleShowMore}>
                {isShowMore ? "ver menos" : "ver mais"}
              </ToggleShowMoreButton>)}
        
        </p>
        </div>

    
      </Frame>
    </Container>
  );
}
