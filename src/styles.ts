import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2',
  vermelho: '#E66767'
}

export const GlobalCss = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
}

body{
 background-color: ${cores.begeClaro};
 color: ${cores.vermelho};
}
`
