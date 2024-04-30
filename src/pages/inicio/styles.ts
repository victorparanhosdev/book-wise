import { styled} from "@/styles/stitches.config";


export const Content = styled("div", {
  display: 'flex',
  gap: "6.4rem",
});

export const TitleAvaliacao = styled("div", {
  fontSize: "$text_sm",
  color: "$gray100",
  marginBottom: "1.6rem",
  fontWeight: "$regular",
});

export const ContentRight = styled("aside", {
  maxWidth: '32.4rem',
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

});

export const Section = styled('section', {
  display: 'grid',
  gap:'$12',
})

