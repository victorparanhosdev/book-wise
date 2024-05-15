import Image from "next/image"
import { Login, Button } from "./styles"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"
import googleLogo from "@/src/assets/logos_google-icon.png";
import gitLogo from "@/src/assets/Clip path group.png";
import rocketLogo from "@/src/assets/RocketLaunch.png";

interface AuthButtonsProps {
    callbackUrl?: string
    canGuest?: boolean
  }

export const AuthButtons = ({callbackUrl= '/inicio', canGuest}: AuthButtonsProps) => {
    const router = useRouter()

    const handleSignin = async(provider?: string) => {

      if(!provider) return router.push(callbackUrl)
        
       
      signIn(provider, {
        callbackUrl,
  
      })
  
    }
  
  
    return(
        <Login>
        <Button onClick={()=> handleSignin("google")}>
          <Image src={googleLogo} height={32} width={32} alt="Google" />
          Entrar com Google
        </Button>
        <Button onClick={()=> handleSignin("github")}>
          <Image src={gitLogo} height={32} width={32} alt="Github" />
          Entrar com GitHub
        </Button>
        {canGuest && <Button onClick={()=> handleSignin()}>
          <Image src={rocketLogo} height={32} width={32} alt="Visitante" />
          Acessar como visitante
        </Button>}
      </Login>
    )
}