
import { Rating, User } from "@prisma/client";
import { UserRatingCard } from "../UserRatingCard";
import { Comments, List, TitleComents } from "./styles";

type BookRating = {
  bookData: BookRatingProps[]
  bookId: string;
}

export type BookRatingProps = {
  rating: Rating & {
    user: User
  }
}


export const BookRatings = ({ bookData, bookId }: BookRating) => {

  console.log(bookData)
  return (
    <Comments>
      <TitleComents>
        <p>Avaliações</p>
        <button>Avaliar</button>
      </TitleComents>
      <List>
        {bookData?.map((data: BookRatingProps) => {
          return <UserRatingCard key={data.rating.id} rating={data.rating} />;
        })}
      </List>
    </Comments>
  );
};
