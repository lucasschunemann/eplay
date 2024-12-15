import React from 'react'
import {
  FooterContainer,
  Logo,
  SocialIcons,
  SocialIcon,
  FooterText
} from './styles'
import 'font-awesome/css/font-awesome.min.css'

import logo from '../../assets/images/logo.png' // Caminho da logo

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="efood logo" />
      <SocialIcons>
        <SocialIcon href="#" target="_blank" aria-label="Facebook">
          {/* Ícone do Facebook */}
          <i className="fab fa-facebook-f"></i>
        </SocialIcon>
        <SocialIcon href="#" target="_blank" aria-label="Instagram">
          {/* Ícone do Instagram */}
          <i className="fab fa-instagram"></i>
        </SocialIcon>
        <SocialIcon href="#" target="_blank" aria-label="Twitter">
          {/* Ícone do Twitter */}
          <i className="fab fa-twitter"></i>
        </SocialIcon>
      </SocialIcons>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
