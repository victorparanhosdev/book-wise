import { styled } from "@/styles/stitches.config";

export const Container = styled('div', {
    position: 'absolute',
    right: 0,
    top: 0,
    background: '$green300',
    padding: '$4 $12',
    borderRadius: ' 0 8px 0 4px',
    zIndex: 0,
    span: {
        color: '$green100',
        fontSize: '1.2rem',
        fontWeight: '$bold',
        textTransform: 'uppercase'
    }
})