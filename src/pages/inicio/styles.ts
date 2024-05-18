import { styled} from "@/styles/stitches.config";


export const Content = styled("div", {
  display: 'flex',
  gap: "6.4rem",
  '@media (max-width: 430px)': {
    display: 'block',

 },
 
});

export const TitleAvaliacao = styled("div", {
  fontSize: "$text_sm",
  color: "$gray100",
  marginBottom: "1.6rem",
  fontWeight: "$regular",
});

export const ContentRight = styled("aside", {
  minWidth: '32.4rem',
  '@media (max-width: 430px)': {
    margin: '4rem 0'
},
  "> div:nth-child(1)": {
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
    
  },

  "> div:nth-child(2)": {
    display: 'grid',
    gap: '1.2rem'
  }

});

export const Section = styled('section', {
  display: 'grid',
  gap:'$12',
})


