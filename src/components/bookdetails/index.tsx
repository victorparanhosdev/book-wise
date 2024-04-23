import Image from 'next/image'
import {BookContainer, ContentOne, ContentTwo} from './styles'
import { BookmarkSimple, BookOpen } from 'phosphor-react'

export const BookDetails = () => {
    return(
        <BookContainer>
            <ContentOne>
                <div>
                <Image width={80} height={80} src="https://github.com/victorparanhosdev.png" alt="as" />
                </div>
                <div>
                    <h1>14 Hábitos de Desenvolvedores Altamente Produtivos</h1>
                    <span>Zeno Rocha</span>

                    <p>••••••</p>
                </div>
            </ContentOne>

            <ContentTwo>
                <div>
                <BookmarkSimple size={24}/>
                <div>
                    <span>Categoria</span>
                    <p>Computação, educação</p>
                </div>

                </div>
                <div>
                <BookOpen size={24}/>
                <div>
                    <span>Páginas</span>
                    <p>160</p>
                </div>
                </div>
          

            </ContentTwo>
        </BookContainer>
    )
}