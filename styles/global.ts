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
  }


});
