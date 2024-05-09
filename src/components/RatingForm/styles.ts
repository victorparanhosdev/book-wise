import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  
    background: '$gray700',
    padding: '2.4rem',
    borderRadius: "$sm",

    textarea: {
        marginTop: '2.4rem',
        background: '$gray800',
        border: '1px solid $gray500',
        borderRadius: '$xs',
        minHeight: '16.4rem',
        width: '100%',
        resize: 'none',
        padding: '1.4rem 2rem',
        color: '$gray400',
      

        '&:focus': {
            outline:'2px solid $gray500',
        },
    

        '&::placeholder': {
            color: '$gray400',
            fontSize: '1.4rem',
            fontWeight: '$regular',
            lineHeight: '160%'
        }
    }

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

        svg: {
            color: '$green100'
        }
    }
})