import { styled } from "@/styles/stitches.config";

export const BookContainer = styled("div", {
  background: "$gray700",
  borderRadius: "10px",
  maxWidth: "56.4rem",
  padding: "2.4rem 3.2rem",
});

export const ContentOne = styled("div", {
  display: "flex",
  gap: "3.2rem",
  marginBottom: "4rem",

  "div:nth-child(1)": {
    minWidth: "17.165rem",
    height: "24.2rem",
    borderRadius: "10px",
  },
  "div:nth-child(2)": {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    borderRadius: "10px",
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },

  h1: {
    fontSize: "$heading_sm",
    color: "$gray100",
    marginBottom: "0.8rem",
  },
  span: {
    fontSize: "$text_md",
    color: "$gray300",
    fontWeight: "$regular",
  },

  p: {
    marginTop: "auto",
    color: 'White'
  },
});

export const ContentTwo = styled("div", {
  paddingBlock: "2.4rem",
  borderTop: "1px solid $gray600",
  display: "flex",
  gap: "5.6rem",

  "> div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },

  svg: {
    color: '$green100',
    marginRight: '1.6rem'
  },

  span: {
    fontSize: '$text_sm',
    color: '$gray300',
    fontWeight: '$regular'
  },
  p: {
    color: '$gray200',
    fontSize: '$heading_xs',
    fontWeight: '$bold'
  }



});
