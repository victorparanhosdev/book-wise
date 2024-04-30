
import { CardContainer } from "./styles";

import Image from "next/image";
import { RatingStart } from "../RatingStart";
import { PopBooks } from "@/src/pages/inicio/index.page";

type PopBookProps = {
  popbook: PopBooks

}

export const CardLivros = ({ popbook }: PopBookProps) => {

  return (
      <CardContainer>
        <div>
          <Image
            height={0}
            width={0}
            src={popbook?.cover_url ?? ''}
            alt={`Imagem do Livro ${popbook?.name}`}
          />
          <div>
            <h2>{popbook?.name}</h2>
            <p>{popbook?.author}</p>

            <RatingStart valueRating={popbook?.avgRating!} />
          </div>
        </div>
      </CardContainer>

  );
}
