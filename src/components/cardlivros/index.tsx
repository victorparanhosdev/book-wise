
import { CardContainer } from "./styles";

import Image from "next/image";

export const CardLivros = () => {
  return (
    <CardContainer href='/'>
      <Image
        height={80}
        width={80}
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div>
        <h2>A Revolução dos bichos</h2>
        <p>George Orwell</p>

        <div>********</div>
      </div>
    </CardContainer>
  );
}
