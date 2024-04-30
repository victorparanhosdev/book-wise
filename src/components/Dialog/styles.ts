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
    background: "rgba(0, 0, 0, 0.2)",
    zIndex: "2",
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
    zIndex: "3",
    paddingInline: "4.8rem",
    "> div:nth-child(1)": {
      display: "flex",
      justifyContent: "end",
      margin: "$24 0 $16",
    },
  
    '&[data-state="open"]': {
      animation: `${contentShow} 0.3s`,
    },
  
    '&[data-state="closed"]': {
      animation: `${contentHidden} 0.3s`,
    },
  });
  
  export const Comments = styled("div", {
    marginTop: "4rem",
  });
  
  export const TitleComents = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.6rem",
    p: {
      color: "$gray200",
      fontSize: "$text_sm",
      fontWeight: "$regular",
    },
  
    button: {
      all: "unset",
      cursor: "pointer",
      color: "$purple100",
      fontSize: "$button_md",
      fontWeight: "$bold",
      padding: "$4 $8",
      borderRadius: "4px",
  
      transition: "background 0.2s",
  
      "&:hover": {
        background: "$gray700",
      },
    },
  });
  
  export const List = styled("ul", {
    display: "grid",
    gap: "$12",
  });
  
  export const ItemList = styled("li", {
    background: "$gray700",
    borderRadius: "$md",
    width: "100%",
    padding: "$24",
    display: "grid",
    gap: "$20",
  
    header: {
      display: "grid",
      gridTemplateColumns: "auto auto 1fr",
      gap: "$16",
  
      h2: {
        color: "$gray100",
        fontSize: "$heading_xs",
      },
      span: {
        color: "$gray400",
        fontSize: "$text_sm",
        fontWeight: "$regular",
      },
  
      "div:last-child": {
        justifySelf: "end",
      },
    },
  
    p: {
      color: "$gray300",
      fontSize: "$text_sm",
    },
  });
  