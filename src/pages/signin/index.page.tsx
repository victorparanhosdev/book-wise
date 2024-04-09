import { Container, BoxLogin, Login, Button } from "./styles"
import Image from "next/image"
import googleLogo from '@/src/assets/logos_google-icon.png'
import gitLogo from '@/src/assets/Clip path group.png'
import rocketLogo from '@/src/assets/RocketLaunch.png'
import BackGround from '@/src/assets/backgroundlogin.png'
export default function SignIn(){
    return(
        <Container>
            <section>
            <Image src={BackGround} height={912} width={598} alt="Background Login"/>
            </section>
            
            <section>
                <BoxLogin>
                    <h1>Boas vindas!</h1>
                    <p>Faça seu login ou acesse como visitante</p>

                <Login><Button><Image src={googleLogo} height={32} width={32}   alt="Google"/>Entrar com Google</Button>
                    <Button><Image src={gitLogo} height={32} width={32} alt="Github"/>Entrar com GitHub</Button>
                    <Button><Image src={rocketLogo} height={32} width={32} alt="Visitante"/>Acessar como visitante</Button>
                </Login>
                 
                
                
                </BoxLogin>
            </section>

        </Container>
    )
}