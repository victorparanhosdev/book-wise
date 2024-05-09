import { useState } from "react"
import { Avatar } from "../Avatar"
import { RatingStart } from "../RatingStart"
import { Container, UserDetails, ContainerButton } from "./styles"
import { useSession } from "next-auth/react"
import { X, Check } from "phosphor-react"

type RatingFromProps = {
    bookId: string
    onCancel: ()=> void
}

export const RatingForm = ({bookId, onCancel}: RatingFromProps) => {
    const {data} = useSession()
    const [currentRating, setCurrentRating] = useState(0)
    const user = data?.user

    return(
        <Container>
            {user && (<>
                <UserDetails>
                    <section>
                    <Avatar src={user.avatar_url} alt={`foto de ${user.name}`}/>
                    <p>{user.name}</p>
                    </section>
                
                    <RatingStart size={24} valueRating={currentRating}/>
                </UserDetails>
                <textarea name="" id="" placeholder="Escreva sua avaliação">

                </textarea>
                <ContainerButton><button onClick={onCancel} type="button"><X size={24} /></button><button type="button"><Check size={24} /></button></ContainerButton>
                </>
            )}
       
            
        </Container>
    )
}