import { styled } from "@/styles/stitches.config"
export const Container = styled("div", {
  background: "$gray800",
  border: "1px solid currentColor",
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: 4,
  padding: '1.4rem 2rem',
  gap: '$8',
  height: '4.8rem',

  color: "$gray500",
  transition: "0.2s",

  "&:focus-within": {
    color: "$green200",
  },

  input: {
    flex: 1,
    background: "none",
    border: "none",
    color: "$gray100",
    fontSize: "1.4rem",

    "&::placeholder": {
      color: "$gray400",
    },

    "&:focus": {
      outline: "none",
    },
  },
});
