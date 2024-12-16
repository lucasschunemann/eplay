import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  padding: 80px; /* Aumentei o padding para dar mais espaço */
  height: 360px;
  background-image: url('../../assets/images/fundo.png'); /* Caminho corrigido */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex; /* Habilita o Flexbox */
  flex-direction: column; /* Alinha os itens verticalmente */
  justify-content: space-between; /* Espaça logo e texto com espaço entre eles */
  align-items: center; /* Centraliza os itens horizontalmente */
`

export const Logo = styled.img`
  width: 120px; /* Tamanho da logo */
`

export const HeaderText = styled.span`
  color: ${cores.vermelho}; /* Cor do texto */
  font-size: 36px; /* Aumentei o tamanho da fonte do título */
  font-weight: bold; /* Texto em negrito */
  text-align: center; /* Centraliza o texto */
  margin-top: 16px; /* Para dar um espaçamento entre a logo e o texto */
`

export const CartInfo = styled.div`
  background-color: ${cores.vermelho};
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  position: absolute;
  top: 16px;
  right: 16px;
`
