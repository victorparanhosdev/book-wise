import { globalCss } from "./stitches.config";

export const globalStyle = globalCss({

  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: '$default'
    
  },


});
