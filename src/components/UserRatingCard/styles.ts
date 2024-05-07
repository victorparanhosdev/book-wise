import { styled } from "@/styles/stitches.config"


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


    variants: {
        variant: {
          primary: {
            background: "$gray700",
          },
          highlight: {
            background: "$gray600",
          }
        }
      }
  });
  