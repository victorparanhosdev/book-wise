import { styled } from "@/styles/stitches.config";

export const Container = styled('div', {
    background: '$gray700',
    padding: '2.4rem',
    borderRadius: '$sm',
    display: 'grid',
    gap: '3.2rem',
 

    '> div:nth-child(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '1.6rem',
  
    },
   
})

export const Frame = styled('div', {
  display: 'flex',
  gap: '$20',

  
  '> div:nth-child(1)': {
    minWidth: '10.8rem',
    height: '15.2rem',


    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '$xs',
  
    }

  },

  '> div:nth-child(2)': {
    h2: {
      fontSize: '$heading_xs',
      color: '$gray100'
    },
    span: {
      fontSize: '$text_sm',
      color: '$gray400',
      fontWeight: '$regular'
    },

    p: {
      marginTop: '2rem',
      color: '$gray300',
      fontSize: '$text_sm',
  
    }
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

export const ToggleShowMoreButton = styled('button', {
  background: "none",
  cursor: 'pointer',
  border: "none",
  fontSize: "1.4rem",
  color: "$purple100",
  fontWeight: "$bold",
  marginLeft: "1rem",
  '&:hover': {
    filter: 'grayscale(30%)'
  }
})