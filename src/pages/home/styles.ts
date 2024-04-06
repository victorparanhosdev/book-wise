import { styled } from "@/styles/stitches.config";
import Background from '@/src/assets/Background.png'
import Link from "next/link";

export const HomeContainer = styled('div', {
  display: 'grid',
  gridAutoColumns: '23.2rem 1fr',
  gridAutoFlow: 'column',
  gridAutoRows: '100vh',
  paddingInline: '$20',
  gap: '9.6rem',
  background: '$gray800',
  color: '$gray100'

})

export const PageTitle = styled('h1', {
  display: 'flex',
  alignItems: 'center',
  gap: '$12',
  color: '$gray100',
  fontSize:'$heading_lg',
  marginTop: '7.2rem',

  svg: {
    color: '$green100'
  }

})


export const SideBarContainer = styled('div', {

  marginBlock: '$20',
  position: 'relative',
  zIndex: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundImage: `url(${Background.src})`, // Substitua pelo caminho correto da sua imagem
  backgroundSize: 'cover', // Ajusta o tamanho da imagem para cobrir todo o elemento
  backgroundRepeat: 'no-repeat', // Evita que a imagem se repita
  borderRadius: '$md'

})

export const Menu = styled('div', {
  margin: '$40 auto 0',

  h1: {
    background: '$gradient-horizontal',
    '-webkit-background-clip': 'text', /* Define a área de clipping */
    '-webkit-text-fill-color': 'transparent', /* Define a cor do texto como transparente */
    display: 'flex',
    alignItems: 'center',
    gap: '$8',
    fontSize: '$heading_md',
    fontWeight: '$bold',
    lineHeight: '$base',
    marginBottom: '6.4rem',

    
  },

  ul: {
    listStyle: 'none',
    display: 'grid',
    gap: '$16',
  },
 



})

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  margin: 'auto auto 2.4rem',
  display: 'flex',
  alignItems: 'center',
  gap: '$12',
  color: '$gray200',
  fontSize: '$button_md',
  fontWeight: '$bold',
  lineHeight: '$base',

  '&:hover': {
    color: '$green100',

  },

  svg: {
    color: "$green100",

  }
})

export const NavLinkButton = styled(Link, {

    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '$text_md',
    lineHeight: '$base',
    color: '$gray400',

    svg: {
      marginRight: "1.2rem", 
    },

    '&:hover': {
      fontWeight: '$bold',
      color: '$gray100',
      transition: 'all 0.2s',
    },

    '&::before': {
      display:'block',
      content: '',
      width: '0.4rem',
      height: '2.4rem',
      background: '$gradient-vertical',
      borderRadius: '$full',
      marginRight: "1.6rem", 
      visibility: 'hidden'
    },

    variants: {
        active: {
          true: {
            color: "$gray100",
            fontWeight: "$bold",
            "&::before": {
              visibility: 'visible'
            }
          }
        }
    }

})