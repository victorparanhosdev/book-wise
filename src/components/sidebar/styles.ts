import { styled } from "@/styles/stitches.config";
import Background from "@/src/assets/Background.png";
import Link from "next/link";



export const SideBarContainer = styled("div", {
  marginBlock: "$20",
  position: "relative",
  zIndex: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${Background.src})`, // Substitua pelo caminho correto da sua imagem
  backgroundSize: "cover", // Ajusta o tamanho da imagem para cobrir todo o elemento
  backgroundRepeat: "no-repeat", // Evita que a imagem se repita
  borderRadius: "$md",



  
});

export const Menu = styled("div", {
  margin: "$40 auto 0",
  


  h1: {
    background: "$gradient-horizontal",
    "-webkit-background-clip": "text" /* Define a área de clipping */,
    "-webkit-text-fill-color":
      "transparent" /* Define a cor do texto como transparente */,
    display: "flex",
    alignItems: "center",
    gap: "$8",
    fontSize: "$heading_md",
    fontWeight: "$bold",
    lineHeight: "$base",
    marginBottom: "6.4rem",
   
    
  },

  ul: {
    listStyle: "none",
    display: "grid",
    gap: "$16",
  },
});

export const Button = styled(Link, {
  all: "unset",
  cursor: "pointer",
  margin: "auto auto 2.4rem",
  display: "flex",
  alignItems: "center",
  gap: "$12",
  color: "$gray200",
  fontSize: "$button_md",
  fontWeight: "$bold",
  lineHeight: "$base",


  "&:hover": {
    color: "$green100",
  },

  svg: {
    color: "$green100",
  },

});

export const NavLinkButton = styled(Link, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  fontSize: "$text_md",
  lineHeight: "$base",
  color: "$gray400",

  svg: {
    marginRight: "1.2rem",
  },

  "&:hover": {
    fontWeight: "$bold",
    color: "$gray100",
    transition: "all 0.2s",
  },

  "&::before": {
    display: "block",
    content: "",
    width: "0.4rem",
    height: "2.4rem",
    background: "$gradient-vertical",
    borderRadius: "$full",
    marginRight: "1.6rem",
    visibility: "hidden",
  },

  variants: {
    active: {
      true: {
        color: "$gray100",
        fontWeight: "$bold",
        "&::before": {
          visibility: "visible",
        },
      },
    },
  },
});



export const MenuMobile = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 5,
  
  paddingInline: '2rem',
  backgroundImage: `url(${Background.src})`, // Substitua pelo caminho correto da sua imagem
  backgroundSize: "cover", // Ajusta o tamanho da imagem para cobrir todo o elemento
  backgroundRepeat: "no-repeat", // Ev
  '> div:nth-child(1)':{
    display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '7rem',

  '> div': {
    display: 'flex',
    alignItems: "center",

  },

  a: {
    background: "$gradient-horizontal",
    "-webkit-background-clip": "text" /* Define a área de clipping */,
    "-webkit-text-fill-color":
      "transparent" /* Define a cor do texto como transparente */,
    display: "flex",
    alignItems: "center",
    gap: "$8",
    fontSize: "$heading_md",
    fontWeight: "$bold",
    lineHeight: "$base"
   
    
  },

  svg: {
    cursor: 'pointer'
  }

  },

  '> a:last-child': {
    margin: '2rem',
  }




})

export const ListMenuMobile = styled('nav', {
  height: 0,
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.4s',


  ul: {
    opacity: 0,
    listStyle: "none",
    display: "grid",
    gap: "$16",
    transition: 'opacity 0.4s',
  },

  
  variants: {
    isMenu: {
     true: {
      height: '9rem',
      opacity: 1,
      visibility: 'visible',

       ul: {
        opacity: 1,
        marginTop: '1rem'
       }
     },
    
    },
    IsHeight: {
      true: {
        height: '13rem',
        opacity: 1,
        visibility: 'visible',
  
         ul: {
          opacity: 1,
          marginTop: '1rem'
         }
      }
    }
   },


})

export const AvatarAuth = styled(Link, {
    all: 'unset',
    cursor: 'pointer',
    display: 'flex',
    alignItems:'center',
})