import { DefaultLayout } from "@/src/components/defaultLayout";
import { PageTitle } from "../../components/pagetittle";
import { Binoculars } from "phosphor-react";
import { NextPageWithLayout } from "../_app.page";
import { InputSearch } from "@/src/components/Input";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Container, Content, Category, SectionBooks } from "./styles";
import { Tag } from "@/src/components/Tag";
import { CardLivros } from "@/src/components/cardlivros";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";
import { PopBooks } from "../inicio/index.page";

const Explorer: NextPageWithLayout = () => {
  const [search, setSearch] = useState<string>("");

  const {data: books} = useQuery({queryKey: ['explorer-books'], queryFn: async()=> {
    const {data} = await api.get('/books/explorer')
    return data ?? []
  }})


  return (
    <Container>
      <PageTitle title="Explorer" icon={<Binoculars size={32} />} />
      <InputSearch
        placeholder="Buscar Livro ou autor"
        icon={<MagnifyingGlass size={20} />}
        css={{ maxWidth: '43.3rem' }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Content>
        <Category>
        {Array.from({length: 7}).map((_, index)=> {
          return <Tag key={index}>{`Menu ${index}`}</Tag>
        })}
        </Category>

        <SectionBooks>
          {books?.map((book: PopBooks, i: string)=> {
            return (
              <CardLivros popbook={book} key={i}/>
            )
          })}

        </SectionBooks>
 



      </Content>
    </Container>
  );
};

Explorer.getLayout = (page) => {
  return <DefaultLayout title="Explorer">{page}</DefaultLayout>;
};

export default Explorer;
