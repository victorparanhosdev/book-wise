import { PerfilRatingProps } from "@/src/pages/perfil/[id].page"
import { Container, Card, BookContent, BoxImage, Content } from "./styles"
import { RatingStart } from "../RatingStart"
import Image from "next/image"
import { getRelativeTimeString } from "@/src/utils/getRelativeTimeString"
import { DialogBook } from "../Dialog"

type PerfilRatingCardProps = {
    rating: PerfilRatingProps
}

export const PerfilRatingCard = ({rating}: PerfilRatingCardProps) => {
    const distance = getRelativeTimeString(new Date(rating.created_at))
    return(
        <Container>
            <span>{distance}</span>
            <DialogBook bookId={rating.book_id}>
            <Card>

                <BookContent>
                    <BoxImage>
                        <Image src={rating.book.cover_url} alt={`Livro de ${rating.book.name}`} height={80} width={80}/>
                    </BoxImage>
                    <Content>
                        <h1>{rating?.book.name}</h1>
                        <p>{rating.book.author}</p>
                        <RatingStart size={16} valueRating={rating.rate}/>
                    </Content>

                </BookContent>
                <p>{rating.book.summary}</p>

            </Card>
            </DialogBook>
        </Container>
    )
}