import { styled } from "@/styles/stitches.config"

export const Container = styled('main', {
    height: 'calc(100vh - 4rem)',
    margin: '2rem',
    display: 'grid',
    gridTemplateColumns: '59.8rem 1fr',

    img:{
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        borderRadius: '1rem'

    },

    'section:last-child': {
        height: 'calc(100vh - 4rem)',
        width: '100%',
        display: 'grid',
        placeContent: 'center',
    }


})

export const BoxLogin = styled('div', {
    width: '37.2rem',
    h1: {
        color: '$gray100',
        fontSize: '$heading_lg',
    },
    p: {
        color: '$gray200',
        fontSize: '$text_md',
        marginBottom: '4rem'
    }
})

export const Button = styled('button', {
    all: 'unset',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap:'$20',
    color: '$gray200',
    fontSize: '$button_lg',
    background: '$gray600',
    borderRadius: '$sm',
    padding: '2rem 2.4rem',


    '&:hover': {
        transition: 'background 0.2s',
        background: '$gray500'
    },

    img: {
        width: '3.2rem',
        objectFit: 'cover'
    }
 
    
})

export const Login = styled('div', {
    display: 'grid',
    gap: '1.6rem'
})