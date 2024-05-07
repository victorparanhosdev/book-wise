

import { Rating, User} from "@prisma/client";
import { UserRatingCard } from "../UserRatingCard";
import { Comments, List, TitleComents } from "./styles";

type BookRatingProps = {
  ratings: Rating[] & {
    user: User
  }
  bookId: string
}

export const BookRatings = ({ ratings, bookId }: BookRatingProps) => {

  console.log(ratings)
  return (
    <Comments>
      <TitleComents>
        <p>Avaliações</p>
        <button>Avaliar</button>
      </TitleComents>
      <List>
        {ratings?.map(data => {
            return(
                <UserRatingCard key={data.id} rating={data}/>
            )
        })}
      </List>
    </Comments>
  );
};
