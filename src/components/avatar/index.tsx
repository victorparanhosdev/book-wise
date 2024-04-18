import { ComponentProps } from "@stitches/react"
import { AvatarImage, Container } from "./styles"


type AvatarProps = ComponentProps<typeof Container> & {
    alt: string,
    size?: 'sm' | 'md' | 'lg',
    src: string
}

export const Avatar = ({alt, src, size= 'md', ...props}: AvatarProps) => {
    return (
        <Container size={size} {...props}>
            <AvatarImage alt={alt} src={src} width={80} height={80} property="true"/>
        </Container>
    )
}