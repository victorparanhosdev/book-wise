import { keyframes, styled } from "@/styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

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
});

export const DialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.6)",
  zIndex: 2,
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(150%)",
  },
  to: {
    opacity: 1,
    transform: "translate(0%)",
  },
});

const contentHidden = keyframes({
  from: {
    opacity: 1,
    transform: "translate(0%)",
  },
  to: {
    opacity: 0,
    transform: "translateX(150%)",
  },
});

export const DialogContent = styled(Dialog.Content, {
  maxWidth: "66rem",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  height: "100vh",
  overflow: "auto",
  background: "$gray800",
  zIndex: 3,
  paddingInline: "4.8rem",

  '@media (max-width: 430px)': {
    paddingInline: '2rem',

    },

  "> div:nth-child(1)": {
    display: "flex",
    justifyContent: "end",
    margin: "$24 0 $16",

  
  },

  '&[data-state="open"]': {
    animation: `${contentShow} 0.3s`,
  },

  '&[data-state="closed"]': {
    animation: `${contentHidden} 0.1s`,
  },
});


export const BookContainer = styled("div", {
  background: "$gray700",
  borderRadius: "10px",
  maxWidth: "56.4rem",
  padding: "2.4rem 3.2rem",
  '@media (max-width: 430px)': {
    padding: '2.4rem 2rem'
    },

  

});

export const ContentOne = styled("div", {
  display: "flex",
  gap: "3.2rem",
  marginBottom: "4rem",
  '@media (max-width: 430px)': {
    flexDirection: 'column'
    },

  "div:nth-child(1)": {
    width: "17.165rem",
    height: "24.2rem",
    borderRadius: "10px",
    '@media (max-width: 430px)': {
      width: '100%'
    
   
    },
  
  },
  "div:nth-child(2)": {
    display: "flex",
    flexDirection: "column",
    '@media (max-width: 430px)': {
      gap: '0.5rem',
    },

    'span:last-child':{
      color: '$gray400',
      fontSize: '$text_sm'
    }
  },

  img: {
    borderRadius: "10px",
    objectFit: "cover",
    height: "100%",
    width: "100%",
    '@media (max-width: 430px)': {
      objectPosition: 'top',
    },
  },

  h1: {
    fontSize: "$heading_sm",
    color: "$gray100",
    marginBottom: "0.8rem",
  },
  span: {
    fontSize: "$text_md",
    color: "$gray300",
    fontWeight: "$regular",
  
  },

  p: {
    color: 'White'
  },
});

export const ContentTwo = styled("div", {
  paddingBlock: "2.4rem",
  borderTop: "1px solid $gray600",
  display: "flex",
  gap: "5.6rem",

  "> div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  },

  svg: {
    color: '$green100',
    marginRight: '1.6rem'
  },

  p: {
    fontSize: '$text_sm',
    color: '$gray300',
    fontWeight: '$regular'
  },
  span: {
    color: '$gray200',
    fontSize: '$heading_xs',
    fontWeight: '$bold'
  }



});


