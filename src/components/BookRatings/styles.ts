import { styled } from "@/styles/stitches.config";



export const Comments = styled("div", {
  marginTop: "4rem",
  paddingBottom: '2rem'
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
  marginBottom: '4rem'
});

