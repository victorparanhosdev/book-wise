import { styled } from "@/styles/stitches.config"
import BackGround from '@/src/assets/backgroundlogin.png'
export const Container = styled('main', {
    height: 'calc(100vh - 4rem)',
    margin: '2rem',
    display: 'flex',

    '@media (max-width: 430px)': {
        flexDirection: 'column',
        margin: 'auto',
    },

    'section:last-child': {
        height: 'calc(100vh - 4rem)',
        margin: 'auto',
        display: 'grid',
        placeContent: 'center',

        
    '@media (max-width: 430px)': {
       placeContent: 'initial',
       margin: '4rem 1rem',
 
  
    },
        
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

    '@media (max-width: 430px)': {
        marginRight: '0',
        borderRadius: '0',
        minHeight: '15rem'
  
    },
    

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
    '@media (max-width: 430px)': {
        margin: '0 auto',
        width: '90%'
  
   
     },

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
