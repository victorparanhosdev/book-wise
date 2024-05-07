import { useSession } from "next-auth/react";

import { getRelativeTimeString } from "@/src/utils/getRelativeTimeString";
import { ItemList} from "./styles";
import Link from "next/link";
import { Avatar } from "../Avatar";
import { RatingStart } from "../RatingStart";
import { Rating, User } from "@prisma/client";


export type UserRatingCardProps = {
  rating: Rating & {
    user: User
  }
}

export const UserRatingCard = ({ rating }: UserRatingCardProps) => {
  const { data: session } = useSession();
  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-BR");

  const isOwner = session?.user?.id === rating.user_id;

  return (
    <ItemList variant={isOwner ? "highlight" : "primary"}>
      <header>
        <Link href={`/perfil/${rating.user_id}`}>
          <Avatar
            alt={`foto perfil de ${rating.user.name}`}
            src={rating.user.avatar_url!}
          />
        </Link>
        <div>
          <h2>{rating.user.name}</h2>
          <span>{distance}</span>
        </div>
        <div>
          <RatingStart valueRating={rating.rate} />
        </div>
      </header>

      <p>{rating.description}</p>
    </ItemList>
  );
};
