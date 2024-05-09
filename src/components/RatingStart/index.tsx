import { ComponentProps } from "@stitches/react"
import { Container } from "./styles"
import { Star } from "phosphor-react"
import { useState } from "react"

type RatingStarProps = ComponentProps<typeof Container> & {
    valueRating: number,
    size: number,
    setRating?: (rating: number) => void
}

export const RatingStart = ({valueRating, setRating, size, ...props}: RatingStarProps) => {
    const [previewValue, setPreviewValue] = useState(0)

    const isEditTable = !!setRating
    const ratingValue = isEditTable ? previewValue : valueRating

    const handleMouseEnter = (value: number) => {
        if(isEditTable) {
            return setPreviewValue(value)
        }
    }

    const handleMouseLeave = () => {
        if(isEditTable) {
            return setPreviewValue(valueRating)
        }
    }

    const handleSetValue = () => {
        if(isEditTable) {
            return setRating(previewValue)
        }
    }

    return(
        <Container css={isEditTable ? { cursor: 'pointer'} : undefined} {...props}>
            {Array.from({length: 5}).map((_,i)=> {
                return <Star onMouseEnter={()=> handleMouseEnter(i + 1)} onMouseLeave={handleMouseLeave} onClick={handleSetValue} weight={(i + 1) <= ratingValue ? 'fill' : 'regular'} key={`start-${i}`} size={size}/>
            })}
        </Container>
    )
}