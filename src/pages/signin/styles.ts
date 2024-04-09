import { styled } from "@/styles/stitches.config"

export const Container = styled('main', {
    height: 'calc(100vh - 4rem)',
    margin: '2rem',
    color: 'White',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',

    img:{
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        borderRadius: '1rem'

    }
})

export const Login = styled('div', {
    h1: {
        color: '$gray100',
        fontSize: '$heading_lg',
    },
    p: {
        color: '$gray200',
        fontSize: '$text_md'
    }
})