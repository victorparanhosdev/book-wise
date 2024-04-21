import { DefaultLayout } from "@/src/components/defaultLayout";
import { PageTitle } from "../../components/pagetittle";
import { User } from "phosphor-react";
import { NextPageWithLayout } from "../_app.page";

const Profile: NextPageWithLayout = () => {
  return (
    <PageTitle title="Perfil" icon={<User size={32} />}/>
    
    );
};

Profile.getLayout = (page) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>;
};

export default Profile;
