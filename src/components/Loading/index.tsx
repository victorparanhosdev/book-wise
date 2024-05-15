import { FallingLines } from "react-loader-spinner";
import { Container } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <FallingLines color="#303F73" width="100" visible={true} />
    </Container>
  );
};
