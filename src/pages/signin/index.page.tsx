import { Container, Login } from "./styles"
import Image from "next/image"

import BackGround from '@/src/assets/backgroundlogin.png'
export default function SignIn(){
    return(
        <Container>
            <Image src={BackGround} height={912} width={598} alt="Background Login"/>
            <Login>Caixa de login</Login>
        </Container>
    )
}