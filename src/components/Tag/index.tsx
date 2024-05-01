import { ComponentProps } from "@stitches/react"
import { Container } from "./styles"
import { ReactNode } from "react"
type TagProps = ComponentProps<typeof Container> & {
    children: ReactNode | string
    active?: boolean
}

export const Tag = ({children, active, ...props}: TagProps) => {
    return(
        <Container active={active} {...props}>
            {children}
        </Container>
    )
}