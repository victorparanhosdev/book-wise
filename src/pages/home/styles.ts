import { styled } from "@/styles/stitches.config";

export const Content = styled("div", {
    height: 'calc(100vh - 18.4rem)',
    overflowX: 'auto',
    display: 'grid',
    gap: '2rem'
});

export const TitleAvaliacao = styled("div", {
  fontSize: "$text_sm",
  color: "$gray100",
  marginBottom: "1.6rem",
  fontWeight: "$regular",
});
