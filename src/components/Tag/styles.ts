import { styled } from "@/styles/stitches.config";

export const Container = styled("button", {
    background: "none",
    color: "$purple100",
    border: "1px solid $purple100",
    padding: "$4 $16",
    borderRadius: "$full",
    transition: "0.2s",
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  
    "&:hover": {
      color: "$gray100",
      background: "$purple200",
    },
  
    variants: {
      active: {
        true: {
          color: "$gray100",
          background: "$purple200",
          borderColor: "$purple200",
        }
      }
    }
  })