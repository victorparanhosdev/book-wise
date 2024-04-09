import { styled } from "@/styles/stitches.config"
import BackGround from '@/src/assets/backgroundlogin.png'
export const Container = styled('main', {
    height: 'calc(100vh - 4rem)',
    margin: '2rem',
    display: 'flex',


    'section:last-child': {
        height: 'calc(100vh - 4rem)',
        margin: 'auto',
        display: 'grid',
        placeContent: 'center',
    }


})
export const SectionLogo = styled('section', {
    background: `url(${BackGround.src}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1rem',
    marginRight: '2rem',
    flex: '1',
    maxWidth: '59.8rem',

    h1: {
        background: "$gradient-horizontal",
        "-webkit-background-clip": "text" /* Define a área de clipping */,
        "-webkit-text-fill-color":
          "transparent" /* Define a cor do texto como transparente */,
        display: "flex",
        alignItems: "center",
        gap: "$12",
        fontSize: "3.6rem",
        fontWeight: "$bold",
        lineHeight: "$base",

        img: {
            width: '4.8rem'
        }
   
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