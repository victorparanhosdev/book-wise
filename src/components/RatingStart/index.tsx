import { ComponentProps } from "@stitches/react"
import { Container } from "./styles"
import { Star } from "phosphor-react"

type RatingStarProps = ComponentProps<typeof Container> & {
    valueRating: number,
    size: number
}

export const RatingStart = ({valueRating, size, ...props}: RatingStarProps) => {
    return(
        <Container {...props}>
            {Array.from({length: 5}).map((_,i)=> {
                return <Star weight={valueRating >= i + 1 ? 'fill' : 'regular'} key={`start-${i}`} size={size}/>
            })}
        </Container>
    )
}