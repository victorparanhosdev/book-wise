import { keyframes, styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog"

export const DialogClose = styled(Dialog.Close, {
    all: "unset",
    cursor: "pointer",
    transition: "transform 0.2s",
    display: "flex",
    alignItems: "center",
  
    "&:hover": {
      transform: "scale(1.1)",
    },
  
    svg: {
      color: "$gray400",
    },
})
const contentShow = keyframes({
  from: {
    opacity: 0,
   
  },
  to: {
    opacity: 1,
  
  },
});

const contentHidden = keyframes({
  from: {
    opacity: 1,
  
  },
  to: {
    opacity: 0,
  
  },
});

export const DialogContent = styled(Dialog.Content, {
    width: "min(51.6rem, 100%)",
    minHeight: "33.7rem",
    backgroundColor: '$gray700',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 5,
    borderRadius: 12,

    '@media (max-width: 430px)': {
      top: 50,
      left: 0,
      transform: 'translate(0, 0)',
      },
  

    "> div:nth-child(1)": {
      display: "flex",
      justifyContent: "end",
      margin: '1.6rem'

   
    },

    '&[data-state="open"]': {
      animation: `${contentShow} 0.3s`,
    },
  
    '&[data-state="closed"]': {
      animation: `${contentHidden} 0.1s`,
    },
  

  
})

export const DialogOverlay = styled(Dialog.Overlay, {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 3,
    
})

export const BoxContent = styled('div', {
      margin: '0 7.2rem',
      paddingBottom: '4rem',
      h1: {
        marginBottom: '4rem',
        color: '$gray200',
        fontSize: '$heading_xs',
        lineHeight: '140%',
        fontWeight: '$bold',
        textAlign:'center',
      }


})