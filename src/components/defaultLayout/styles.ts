import { styled } from "@/styles/stitches.config";

export const DefaultLayoutContainer = styled('div', {
    display: 'grid',
    gridAutoColumns: '23.2rem 1fr',
    gridAutoFlow: 'column',
    gridAutoRows: '100vh',
    paddingInline: '$20',
    gap: '9.6rem',
    background: '$gray800',
    color: '$gray100',
    '@media (max-width: 430px)': {
        display: 'block',
      

     },
 
    
})

export const Content = styled('div', {  
    marginTop: '7.2rem',
    maxWidth: '99.6rem',
    overflow:'auto',
     /* Esconder scrollbar horizontal, se existir */
    '&::-webkit-scrollbar': {
        width: 0,
      
    },

    
  '@media (max-width: 430px)': {
   
    marginTop: '9rem'
    },

 
  
})