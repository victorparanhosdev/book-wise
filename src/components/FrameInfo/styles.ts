import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",


  svg: {
    color: "$green100",
    marginRight: "2rem",
  },

  p: {
    fontSize: "$text_sm",
    color: "$gray300",
    fontWeight: "$regular",
  },
  span: {
    color: "$gray200",
    fontSize: "$heading_xs",
    fontWeight: "$bold",
  },
});
