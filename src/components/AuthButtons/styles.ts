import { styled } from "@/styles/stitches.config";

export const Login = styled('div', {
    display: 'grid',
    gap: '1.6rem'
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