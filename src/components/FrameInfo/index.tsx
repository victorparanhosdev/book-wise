import { ComponentProps } from "@stitches/react"
import { Container } from "./styles"
import { ReactNode } from "react"


type FrameProps = ComponentProps<typeof Container> & {
    icon?: ReactNode,
    value: number,
    title: string
}
export const FrameInfo = ({icon, value, title, ...props}: FrameProps) => {
    return(
        <Container {...props}>
            {icon}   
            <div>
                <span>{value}</span>
                <p>{title}</p>
            </div>
        </Container>
    )
}