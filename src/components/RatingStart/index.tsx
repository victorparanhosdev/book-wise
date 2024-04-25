import { Container } from "./styles"
import { Star } from "phosphor-react"
export const RatingStart = () => {
    return(
        <Container>
            {Array.from({length: 5}).map((_,i)=> {
                return <Star weight="fill" key={`start-${i}`} size={16}/>
            })}
        </Container>
    )
}