import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$12",
  marginBottom: '4rem',
  marginTop: '7.2rem',
  svg: {
    color: "$green100",
  },

  h1: {
    
    color: "$gray100",
    fontSize: "$heading_lg",
   
  },
});
