import { DefaultLayout } from "@/src/components/defaultLayout";
import { PageTitle } from "../../components/pagetittle";
import { Binoculars } from "phosphor-react";
import { NextPageWithLayout } from "../_app.page";
import { InputSearch } from "@/src/components/Input";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Container } from "./styles";

const Explorer: NextPageWithLayout = () => {
  const [search, setSearch] = useState<string>("");

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
    </Container>
  );
};

Explorer.getLayout = (page) => {
  return <DefaultLayout title="Explorer">{page}</DefaultLayout>;
};

export default Explorer;
