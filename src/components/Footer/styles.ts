import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege}; /* Ou a cor de fundo que você preferir */
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Espaça os elementos */
  align-items: center;
  padding: 64px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 24px;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px; /* Espaçamento entre os ícones */
`

export const SocialIcon = styled.a`
  color: ${cores.vermelho};
  font-size: 24px;
  text-decoration: none;
`

export const FooterText = styled.p`
  color: ${cores.vermelho};
  font-size: 14px;
  margin-top: 24px;
  max-width: 600px;
  line-height: 1.6;
  font-weight: normal;
`
