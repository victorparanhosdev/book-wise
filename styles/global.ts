import { globalCss } from "./stitches.config";

export const globalStyle = globalCss({

  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  ':root': {
    fontSize: '62.5%',
    
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: '$default',
    background: '$gray800'
  },
  
  'body, input, button, textarea': {
    fontSize: '$text_md'
  },

  '::-webkit-scrollbar': {
    width: '0.6rem',
    height: '0.6rem',
    background: '$gray700',
    borderRadius: '$full'
  },

  '::-webkit-scrollbar-thumb': {
    background: '$gray600',
    borderRadius: '$full',
   
  },
  
  ul: {
    listStyle: 'none'
  },

  a: {
    textDecoration: 'none'
  }



});
