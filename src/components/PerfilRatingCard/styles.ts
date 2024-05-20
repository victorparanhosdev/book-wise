import { styled } from "@/styles/stitches.config";

export const Container = styled('div', {
    display: 'grid',
    gap: '0.8rem',
    span: {
        fontSize: '$text_sm',
        color: '$gray300',
        fontWeight: '$regular',
        lineHeight: '160%'
    }
})

export const Card = styled('div', {
    cursor: 'pointer',
    background: '$gray700',
    borderRadius: 8,
    padding: '$24',
    display: 'grid',
    gap: "$24"
})

export const BookContent = styled('div', {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'left',
    gap: "$24"
})

export const BoxImage = styled('div', {
    width: '9.8rem',
    height: '13.4rem',

    img: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    }
})

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    h1: {
        fontSize: '$heading_sm',
        color: '$gray100',
        lineHeight: '140%'
    },
    p: {
        marginTop: '0.2rem',
        color: '$gray400',
        fontSize: '$text_sm',
        lineHeight: '160%'
    },

    'div:last-child': {
        marginTop: 'auto'
    }
})