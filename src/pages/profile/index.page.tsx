import { DefaultLayout } from "@/src/components/defaultLayout";
import { PageTitle } from "../../components/PageTitle";
import { User } from "phosphor-react";
import { NextPageWithLayout } from "../_app.page";

const Profile: NextPageWithLayout = () => {
  return (
    <PageTitle title="Profile" icon={<User size={32} />}/>
    
    );
};

Profile.getLayout = (page) => {
  return <DefaultLayout title="Profile">{page}</DefaultLayout>;
};

export default Profile;
