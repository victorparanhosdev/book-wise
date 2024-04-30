
import { CardContainer } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import Image from "next/image";
import { RatingStart } from "../RatingStart";
import { PopBooks } from "@/src/pages/inicio/index.page";

type PopBookProps = {
  popbook: PopBooks

}

export const CardLivros = ({popbook}: PopBookProps) => {

  return (
      <Dialog.Trigger asChild>
        <CardContainer>
          <div>
          <Image
            height={80}
            width={80}
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
      </Dialog.Trigger>
  );
}
