import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  marginTop: "2.4rem",
  background: "$gray800",
  border: "1px solid currentColor",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: 4,
  color: "$gray500",
  transition: "0.2s",

  "&:focus-within": {
    borderColor: "$green200",
  },

  textarea: {
    outline: "none",
    background: "$gray800",
    border: "none",
    borderRadius: "$xs",
    minHeight: "16.4rem",
    width: "100%",
    resize: "none",
    padding: "1.4rem 2rem",
    color: "$gray400",

    "&::placeholder": {
      color: "$gray400",
      fontSize: "1.4rem",
      fontWeight: "$regular",
      lineHeight: "160%",
    },
  },

  span: {
    color: "#7C7C8A",
    fontSize: "$xs",
    marginLeft: "auto",
    paddingRight: "0.8rem",
    paddingBottom: "0.4rem",
  },
});
