import { styled } from "@/styles/stitches.config"

export const Container = styled('div', {
  marginBottom: '4rem'
})

export const Header = styled('header', {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",

  a: {
    all: "unset",
    cursor: "pointer",
    color: "$purple100",
    fontSize: "$button_sm",
    fontWeight: "$bold",
    display: "flex",
    gap: ".8rem",
    alignItems: "center",
    padding: "0.4rem 0.8rem",
    borderRadius: "$xs",
    transition: "background 0.2s",

    "&:hover": {
      background: "$gray700",
    },

    svg: {
      color: "$purple100",
      minWidthidth: "1.6rem",
      height: "1.6rem",
    },
  },
})

export const ContainerBook = styled('div', {
 
    display: 'flex',
    gap: '$24',
    borderRadius: 8,
    background: '$gray600',
    padding: '$20 $24',
    marginBottom: '$8'
})

export const Box = styled('div', {

    display: 'flex',
    justifyContent: 'space-between',

    span: {
        fontSize: '$text_sm',
        color: '$gray300',
        lineHeight: '160%'
    }
    
})

export const Content = styled('div', {
    h1: {
        fontSize: '$heading_xs',
        color: '$gray100',
        marginBottom: '1rem',
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
})

export const BookImagem = styled('div', {
    minWidth: '10.8rem',
    height: '15.2rem',
    cursor: 'pointer',


    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '$xs',
  
    }
})