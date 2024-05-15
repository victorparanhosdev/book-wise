

import { UserRatingCard } from "../UserRatingCard";
import { Comments, List, TitleComents } from "./styles";
import { RatingsProps } from "../Dialog";
import { useState } from "react";
import { RatingForm } from "../RatingForm";
import { useSession } from "next-auth/react";
import { DialogAvaliation } from "../DialogAvaliation";


type BookRatingProps = {
  bookData: RatingsProps[]
  bookId: string;
}


export const BookRatings = ({ bookData, bookId }: BookRatingProps) => {
  const[showForm, setShowFrom] = useState<boolean>(false)
  const {status, data: session} = useSession()



  const handleAvaliation = () => {
    if(status === 'unauthenticated') return
    setShowFrom(true)
  }

  const sortedRatingsByDate = bookData.sort((a,b)=> {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const canRate = bookData.every(x => x.user.id !== session?.user.id)

  const AvaliationAutentication = status === 'unauthenticated' ? DialogAvaliation : 'div'

  return (
    <Comments>
      <TitleComents>
        <p>Avaliações</p>
       {canRate && <AvaliationAutentication><button type="button" onClick={handleAvaliation}>Avaliar</button></AvaliationAutentication> }
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
