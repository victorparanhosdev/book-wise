import { styled } from "@/styles/stitches.config";
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
  
})

export const DialogOverlay = styled(Dialog.Overlay, {
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.2)",
    zIndex: "2",
})