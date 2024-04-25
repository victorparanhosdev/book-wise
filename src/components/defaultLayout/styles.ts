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
 
    
})

export const Content = styled('div', {  
    maxWidth: '120rem',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none'    
        },

  
})