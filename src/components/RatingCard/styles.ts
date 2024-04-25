import { styled } from "@/styles/stitches.config";

export const Container = styled('div', {
    background: '$gray700',
    padding: '2.4rem',
    borderRadius: '$sm',
    display: 'grid',
    gap: '3.2rem',
    maxWidth: '60.8rem',

    '> div:nth-child(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1.6rem',
  
    },
    '> div:nth-child(2)': {
      display: 'flex',
      gap: '$20'
  
    }
})

export const Header = styled('header', {
    display: 'flex',
    alignItems: 'center',  
    gap: '1.6rem',

  
    p: {
      color: '$gray100',
      fontSize: '$text_md',
      fontWeight: '$regular'
    },
    span: {
      color: '$gray400',
      fontSize: '$text_sm',
      fontWeight: '$regular'
    }
      
    
    
    
    
    
    })