import { ReactNode } from "react"
import {DefaultLayoutContainer, Content} from './styles'
import { SideBar } from "../sidebar"
import {NextSeo} from 'next-seo'
interface DefaultLayoutProps {
    children: ReactNode,
    title: string,
    description?: string,
    noindex?: boolean
}

export const DefaultLayout = ({children, title, description, noindex = false}: DefaultLayoutProps) => {
    return(
        <DefaultLayoutContainer>
            <NextSeo
            title={`${title} | BookWise`}
            description={description}
            noindex={noindex}
            additionalLinkTags={[
                {
                    rel: 'icon',
                    href: '/favicon.svg',
                    type: 'image/svg'
                }
            ]}
            />
            <SideBar />

            <Content>
            {children}
            </Content>


            
        </DefaultLayoutContainer>
    )
}