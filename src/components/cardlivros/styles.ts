import { styled} from "@/styles/stitches.config";

export const CardContainer = styled('button', {
  all: 'unset',
  width: '100%',

  '> div:nth-child(1)': {

    background: '$gray700',
    borderRadius: '$sm',
    padding: '1.8rem 2rem',
    display: 'flex',
    gap: '2rem',

    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
   
  
    '&:hover': {

      borderColor: '$gray600'
    },
  
  
    h2: {
      fontSize: '$heading_xs',
      textOverflow: 'ellipsis',
      '-webkit-line-clamp': 1,
      '-webkit-box-orient': 'vertical',
      display: '-webkit-box',
      overflow: 'hidden',
      width: '100%',
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



  },

})
