import { FormEvent, useState } from "react";
import { Avatar } from "../Avatar";
import { RatingStart } from "../RatingStart";
import { Container, UserDetails, ContainerButton } from "./styles";
import { useSession } from "next-auth/react";
import { X, Check } from "phosphor-react";
import { TextArea } from "../TextArea";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";




type RatingFromProps ={
  bookId: string;
  onCancel: () => void;
};

export const RatingForm = ({ bookId, onCancel, ...props }: RatingFromProps) => {
  const { data } = useSession();
  const [currentRating, setCurrentRating] = useState(0);
  const [description, setDescription] = useState("");
  const user = data?.user;

  const submitDisabled = !description.trim() || !currentRating

  const {mutateAsync: handleRate} = useMutation({mutationFn: async () => {
    await api.post(`/books/${bookId}/rate`, {
      description,
      rate: currentRating,

    })
  }})

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if(submitDisabled) return
    await handleRate()

  }

  return (
    <Container>
      {user && (
        <>
          <UserDetails>
            <section>
              <Avatar src={user.avatar_url} alt={`foto de ${user.name}`} />
              <p>{user.name}</p>
            </section>

            <RatingStart setRating={setCurrentRating} size={24} valueRating={currentRating} />
          </UserDetails>
            <form action="" onSubmit={handleSubmit}>
            <TextArea
            maxLength={450}
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            placeholder="Escreva sua avaliação"
          />

          <ContainerButton>
            <button onClick={onCancel} type="button">
              <X style={{ color: "#8381D9" }} size={24} />
            </button>
            <button disabled={submitDisabled} type="submit">
              <Check size={24} />
            </button>
          </ContainerButton>

            </form>
         
        </>
      )}
    </Container>
  );
};
