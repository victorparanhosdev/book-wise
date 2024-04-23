import { styled, keyframes } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const Content = styled("div", {
    display: 'grid',
    gridAutoFlow: 'column',
    gap: '6.4rem'
});

export const TitleAvaliacao = styled("div", {
  fontSize: "$text_sm",
  color: "$gray100",
  marginBottom: "1.6rem",
  fontWeight: "$regular",
});


export const ContentRight= styled('aside', {
  '> div:nth-child(1)': {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',

  },
})

export const DialogTrigger = styled(Dialog.Trigger, {
  all: 'unset',
  cursor: 'pointer',
  color: '$purple100',
  fontSize: '$button_sm',
  fontWeight: '$bold',
  display: 'flex',
  gap:'.8rem',
  alignItems: 'center',
  padding: '0.4rem 0.8rem',
  borderRadius: '$xs',
  transition: 'background 0.2s',

  '&:hover':{
    background: '$gray700'
  },

  svg: {
    color: '$purple100',
    minWidthidth: '1.6rem',
    height: '1.6rem'
  }
})

export const DialogClose = styled(Dialog.Close, {
  all: 'unset',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  display: 'flex',
  justifyContent: 'end',

  '&:hover':{
    transform: 'scale(1.1)'
  },

  svg: {
    color: '$gray400',
  }
})


export const DialogOverlay = styled(Dialog.Overlay,{
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.6)',
  zIndex: '2',
})

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(150%)'
  },
  to: {
    opacity: 1,
    transform: 'translate(0%)'
  }

})


const contentHidden = keyframes({
  from: {
    opacity: 1,
    transform: 'translate(0%)'
  },
  to: {
    opacity: 0,
    transform: 'translateX(150%)'
  }
}) 

export const DialogContent = styled(Dialog.Content,{
  width: 'min(100%, 66rem)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  height: '100vh',
  background: '$gray800',
  zIndex: '3',
  margin: 'auto',

 
  '&[data-state="open"]': {
    animation: `${contentShow} 0.3s`
   },
  
   '&[data-state="closed"]': {
    animation: `${contentHidden} 0.3s`
  }
  
})

