import { styled } from "@/styles/stitches.config";

export const Container = styled('main', {
    display: "grid",
    gridTemplateAreas: "'title search' 'content content'",
    '@media (max-width: 430px)': {
        display: 'block'
    }
    
})

export const CategoryList = styled('div', {
    flexWrap: 'wrap',
    display: 'flex',
    gap: '$12',
    marginBottom: '4.8rem'
})
export const Content = styled('section', {
    gridArea: 'content',
    '@media (max-width: 430px)': {
        marginTop: '4.8rem'
    }

})

export const SectionBooks = styled('section', {

    display: "grid",
    gridTemplateColumns: 'repeat(auto-fill, minmax(25rem, 1fr))',
    gap: '$20',
    marginBottom: '4.8rem'

})