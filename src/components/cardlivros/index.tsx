import { CardContainer, ImageContainer, Content, CardMain } from "./styles";
import Image from "next/image";
import { RatingStart } from "../RatingStart";
import { PopBooks } from "@/src/pages/inicio/index.page";
import { ComponentProps } from "@stitches/react";
import { DialogBook } from "../Dialog";


type PopBookProps = ComponentProps<typeof ImageContainer> & {
  popbook: PopBooks;
  size?: "sm" | "md" | "lg";
  sizePadding?: "min" | "max" 
};



export const CardLivros = ({ size = "md", sizePadding = 'min', popbook }: PopBookProps) => {

 
  return (
    <DialogBook bookId={popbook?.id}>
    <CardContainer>
      <CardMain sizePadding={sizePadding}>
        <ImageContainer size={size}>
          <Image
            height={0}
            width={0}
            src={popbook?.cover_url}
            alt={`Imagem do Livro ${popbook?.name}`}
          />
        </ImageContainer>
        <Content>
          <h2>{popbook?.name}</h2>
          <p>{popbook?.author}</p>

          <RatingStart size={16} valueRating={popbook?.avgRating} />
        </Content>
      </CardMain>
    </CardContainer>
    </DialogBook>
  );
};
