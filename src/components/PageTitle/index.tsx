import { ComponentProps, ReactNode } from "react";
import { Container } from "./styles";

type PageTitleProps = ComponentProps<typeof Container> & {
  icon: ReactNode;
  title: string;
};

export const PageTitle = ({ icon, title, ...props }: PageTitleProps) => {
  return (
    <Container {...props}>
      {icon}
      <h1>{title}</h1>
    </Container>
  );
};
