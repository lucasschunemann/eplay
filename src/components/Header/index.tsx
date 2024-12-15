import { HeaderBar, Logo, HeaderText } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <Logo src={logo} alt="Logo do site" />
    <HeaderText>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </HeaderText>
  </HeaderBar>
)

export default Header
