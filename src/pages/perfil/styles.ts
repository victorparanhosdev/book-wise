
import { styled } from "@/styles/stitches.config";
import Link from "next/link";

export const Container = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 30.8rem',
    gap: '6.4rem',

    '@media (max-width: 430px)': {
        display: 'block'
    }

})

export const BoxProfile = styled('div', {

    borderLeft: '1px solid $gray700',
    '@media (max-width: 430px)': {
        border: 'none',
        marginTop: '2rem'
    },
    "> div:nth-child(1)": {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        p: {
            marginTop: '2rem',
            fontSize: '$heading_md',
            color: '$gray100',
            fontWeight: '$bold',
            lineHeight: '140%'
        },
        span: {
            fontSize: '$text_sm',
            color: '$gray400',
            fontWeight: '$regular',
            lineHeight: '160%'
        }
    },

    "> div:last-child": {
        display: 'grid',
        padding: '2rem 5.6rem',
        gap: '4rem',
    }
})

export const Retangulo = styled("div", {
    width: 32,
    height: 4,
    background: '$gradient-horizontal',
    margin: '$32 auto',
    borderRadius: '$full',

 
})

export const Content = styled("div", {
    marginTop:'$24',
    display: 'grid',
    gap: '2.4rem',
    h1: {
        fontSize: '$text_lg'
    }
})

export const ButtonBack = styled(Link, {
    fontSize: '$button_md',
    fontWeight: '$bold',
    color: '$gray200',
    lineHeight: '160%',
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '4rem',
    gap:'$12',


    svg: {
        color: '$gray200'
    }

})