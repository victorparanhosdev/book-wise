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

 '> img': {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: -1,
    borderRadius: '$md',
  }
})
