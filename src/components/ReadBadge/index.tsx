import { ReactNode } from "react"
import { Container } from "./styles"

type ReadBadgeProps = {
    title: string
}

export const ReadBadge = ({title}: ReadBadgeProps) => {
    return(
        <Container>
            <span>{title}</span>
        </Container>
    )
}