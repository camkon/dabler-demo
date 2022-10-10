import { useNavigate } from 'react-router-dom'
import './index.scss'

//assests
import menu from '../../assets/icons/menu.svg'
import logo from '../../assets/icons/logo.svg'

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className='header-container'>
      <div className="header-left">
        <img src={menu} alt="menu" className='header-menu' />
        <img src={logo} alt="logo" className='header-logo' onClick={() => {navigate('/')}}/>
      </div>
      <div className="header-right">
        <div className="header-name">Renjith Viswanath</div>
        <div className="header-title">AWS-DEV</div>
      </div>
    </div>
  )
}

export default Header
