import { styled } from "@/styles/stitches.config";
import Image from "next/image";


export const Container = styled('div', {
    background: '$gradient-vertical',
    padding: 1,
    borderRadius: '$full',
    variants: {
        size: {
            sm: {
                width: 32,
                minWidth: 32,
                height: 32
            },
            md: {
                width:40,
                minWidth: 40,
                height: 40
            },
            lg: {
                width: 72,
                minWidth: 72,
                height: 72
            }
        }
    }
})

export const AvatarImage = styled(Image, {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: '$full',
})