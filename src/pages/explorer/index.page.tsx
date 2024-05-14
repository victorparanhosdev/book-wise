import { DefaultLayout } from "@/src/components/defaultLayout";
import { PageTitle } from "../../components/pagetittle";
import { Binoculars } from "phosphor-react";
import { NextPageWithLayout } from "../_app.page";
import { InputSearch } from "@/src/components/Input";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Container, Content, CategoryList, SectionBooks } from "./styles";
import { Tag } from "@/src/components/Tag";
import { CardLivros } from "@/src/components/cardlivros";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/src/lib/axios";
import { PopBooks } from "../inicio/index.page";
import { Category } from "@prisma/client";



const Explorer: NextPageWithLayout = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setselectedCategory] = useState<string | null>(null)

  const {data: books} = useQuery<PopBooks[]>({queryKey: ['explorer-books', selectedCategory], queryFn: async()=> {
    const {data} = await api.get('/books', {
      params: {
        category: selectedCategory
      }
    })
    return data?.books ?? []
  }})

  const { data: categories } = useQuery<Category[]>({queryKey: ["categories"], queryFn: async () => {
    const { data } = await api.get("/books/categories");
    return data?.categories ?? []
  }})


  const filteredBooks = books?.filter((book) => {
    return book.name.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
  })


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
        <CategoryList>
          <Tag onClick={()=>setselectedCategory(null)} active={selectedCategory === null}>Tudo</Tag>
        {categories?.map((category)=> {
          return <Tag onClick={()=> setselectedCategory(category.id)} active={selectedCategory === category.id} key={category.id}>{category.name}</Tag>
        })}
        </CategoryList>

        <SectionBooks>
          {filteredBooks?.map((book: PopBooks)=> {
            return (
              <CardLivros popbook={book} key={book.id}/>
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
