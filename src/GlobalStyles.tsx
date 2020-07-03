import { createGlobalStyle } from 'styled-components'
import THEME from 'theme'

const fontFace = (name: string, nameInFolder: string, fontWeight = 'normal', fontStyle = 'normal') => {
    return `
      @font-face {
          font-family: "${name}";
          src: url(${require(`assets/fonts/${name}/${nameInFolder}.ttf`)}) format("truetype"); 
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      } 
  `
}

export const GlobalStyles = createGlobalStyle`

    ${fontFace('Roboto', 'Roboto-Bold', 'bold')}
    ${fontFace('Roboto', 'Roboto-Regular')}

    body, #root, html {
        height: 100%; 
    }

    body {
        font-family: 'Roboto', sans-serif
    }

    &::placeholder {
        font-family: 'Roboto', sans-serif; 
        font-size: 13px; 
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .text-right {
        text-align: right;
    }

    h4 {
        color: ${THEME.fluent.DARK_BROWN as string}
    }
`