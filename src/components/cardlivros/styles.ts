import { styled} from "@/styles/stitches.config";

export const CardContainer = styled('button', {
  all: 'unset',
  background: '$gray700',
  borderRadius: '$sm',
  padding: '1.8rem 2rem',
  display: 'flex',
  gap: '2rem',
  maxWidth: '32.4rem',
  marginBottom: '1.2rem',
  border: '2px solid transparent',
  cursor: 'pointer',
  transition: 'border-color 0.2s',
  '&:hover': {

    borderColor: '$gray600'
  },


  h2: {
    fontSize: '$heading_xs'
  },
  p: {
    color: '$gray400',
    fontSize: '$text_sm',
  },
  img: {
    objectFit: 'cover',
    height: '9.4rem',
    minWidth: '6.4rem',
    borderRadius: '$xs',
  },

  '> div:nth-child(2)': {
    display: 'flex',
    flexDirection: 'column',

    'div:last-child': {
      marginTop: 'auto'
    }
  }
})
