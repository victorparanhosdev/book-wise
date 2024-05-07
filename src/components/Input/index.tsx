
import { Container } from "./styles"
import { InputHTMLAttributes, ReactNode } from "react"
import { CSS } from "@stitches/react/types/css-util"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: ReactNode
    css?: CSS
}

export const InputSearch = ({icon, css, ...props}: InputProps) => {
    return (
        <Container css={css}>
            <input {...props}/>
            {icon}
        </Container>
    )
}