
import { Rating, User } from "@prisma/client";
import { UserRatingCard } from "../UserRatingCard";
import { Comments, List, TitleComents } from "./styles";



type BookRatingProps = {
  bookData: any[]
  bookId: string;
}
export const BookRatings = ({ bookData, bookId }: BookRatingProps) => {


  return (
    <Comments>
      <TitleComents>
        <p>Avaliações</p>
        <button>Avaliar</button>
      </TitleComents>
      <List>
        {bookData?.map((data) => {
          return <UserRatingCard key={data.id} rating={data} />;
        })}
      </List>
    </Comments>
  );
};
