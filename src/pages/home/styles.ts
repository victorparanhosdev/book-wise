import { styled } from "@/styles/stitches.config";


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


 '> img': {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: -1,
    borderRadius: '$md',
  },


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

    li: {
      display: 'flex',
      alignItems: 'center',
      gap: '$12',
      cursor: 'pointer',
      fontSize: '$text_md',
      lineHeight: '$base',
      color: '$gray400',

      '&:hover': {
        fontWeight: '$bold',
        color: '$gray100',
      }
    }
  }


})

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  margin: 'auto auto 2.4rem',
})