// src/components/Header/index.tsx
import React from 'react'
import { HeaderBar, Logo, HeaderText, CartInfo } from './styles'
import logo from '../../assets/images/logo.png'

interface HeaderProps {
  cartItems: number
}

const Header: React.FC<HeaderProps> = ({ cartItems }) => (
  <HeaderBar>
    <Logo src={logo} alt="Logo do site" />
    <HeaderText>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </HeaderText>
    <div>Carrinho: {cartItems} itens</div>
  </HeaderBar>
)

export default Header
