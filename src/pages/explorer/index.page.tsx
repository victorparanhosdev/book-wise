import { DefaultLayout } from "@/src/components/defaultLayout";
import { PageTitle } from "../../components/PageTitle";
import { Binoculars } from "phosphor-react";
import { NextPageWithLayout } from "../_app.page";

const Explorer: NextPageWithLayout = () => {
  return (
    <PageTitle title="Explorer" icon={<Binoculars size={32} />}/> 
    
    );
};

Explorer.getLayout = (page) => {
  return <DefaultLayout title="Explorer">{page}</DefaultLayout>;
};

export default Explorer;
