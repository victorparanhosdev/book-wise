

import { UserRatingCard } from "../UserRatingCard";
import { Comments, List, TitleComents } from "./styles";
import { RatingsProps } from "../Dialog";
import { useState } from "react";
import { RatingForm } from "../RatingForm";
import { useSession } from "next-auth/react";


type BookRatingProps = {
  bookData: RatingsProps[]
  bookId: string;
}


export const BookRatings = ({ bookData, bookId }: BookRatingProps) => {
  const[showForm, setShowFrom] = useState<boolean>(false)
  const {status} = useSession()



  const handleAvaliation = () => {
    if(status === 'unauthenticated'){
      return alert('Por favor logue')
    }
    setShowFrom(true)
  }

  const sortedRatingsByDate = bookData.sort((a,b)=> {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  return (
    <Comments>
      <TitleComents>
        <p>Avaliações</p>
        <button type="button" onClick={handleAvaliation}>Avaliar</button>
      </TitleComents>
      <List>
        {showForm && <RatingForm bookId={bookId} onCancel={()=> setShowFrom(false)}/>}
        {sortedRatingsByDate?.map((data) => {
          return <UserRatingCard key={data.id} rating={data} />;
        })}
      </List>
    </Comments>
  );
};
