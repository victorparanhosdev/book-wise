import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  
    background: '$gray700',
    padding: '2.4rem',
    borderRadius: "$sm",


  })
  
export const UserDetails = styled("div", {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    section: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.6rem',
        p: {
            fontSize: '$heading_xs',
            color: '$gray100',
            fontWeight: '$bold'
        }
    }
})
export const RatingsList = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "$6"
  })


export const ContainerButton = styled('div', {
    display: 'flex',
    justifyContent: 'end',
    paddingTop: '1.2rem',
    gap: '0.8rem',

    button: {
        all: 'unset',
        cursor: 'pointer',
        background: '$gray600',
        padding: '8px',
        display: 'flex',
        borderRadius: '4px',
        transition: 'background 0.2s',
        '&:not(:disabled):hover':{
            background: '$gray500'
        },
        '&:disabled':{
            opacity: '0.5',
            cursor: 'not-allowed'
        },

        svg: {
            color: '$green100'
        }
    }
})