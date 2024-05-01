import { styled } from "@/styles/stitches.config";

export const Container = styled('main', {
    display: "grid",
    gridTemplateAreas: "'title search' 'content content'",
    
})

export const Category = styled('div', {
    display: 'flex',
    gap: '$12',
    marginBottom: '4.8rem'
})
export const Content = styled('section', {
    gridArea: 'content',

})

export const SectionBooks = styled('section', {

    display: "grid",
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$20'

})