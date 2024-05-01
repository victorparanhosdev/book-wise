import { styled } from "@/styles/stitches.config";

export const CardContainer = styled("button", {
  all: "unset",
  width: "100%",
 
});


export const CardMain = styled('div', {

    background: "$gray700",
    borderRadius: "$sm",
    display: "flex",
    gap: "2rem",
  
    border: "2px solid transparent",
    cursor: "pointer",
    transition: "border-color 0.2s",
  
    "&:hover": {
      borderColor: "$gray600",
    },
  
    variants: {
      sizePadding: {
        min: {
          padding: '$16 $20'
        },
        max: {
          padding: '$24 $32'
        },  
      }
    }

})


export const ImageContainer = styled('div', {
    variants: {
      size: {
        sm: {
          minWidth: "6.4rem",
          height: "9.4rem",
        },
        md: {
          height: "15.2rem",
          minWidth: "10.8rem",
        },
        lg: {
          height: "24.2rem",
          minWidth: "17.165rem",
        },
      },
    },

  img: {
    objectFit: "cover",
    height: "100%",
    width: "100%",

    borderRadius: "$xs",
  },


})


export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontSize: "$heading_xs",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box",
    overflow: "hidden",
    width: "100%",
  },
  p: {
    color: "$gray400",
    fontSize: "$text_sm",
    marginBottom: "auto",
  },


})