import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './index.scss'
//assests
import detailsIcon from '../../../assets/icons/vector.svg'
import codeIcon from '../../../assets/icons/code.svg'
import checkIcon from '../../../assets/icons/check_ring.svg'
import historyIcon from '../../../assets/icons/history.svg'

const Nav = () => {

  const nav = useNavigate()
  useEffect(() => {
    nav('code')
  }, [])

  return (
    <div className='nav-head-container'>
      <div className="nav-head-left">
        <NavLink to="details" className={({isActive}) => isActive ? "nav-menus nav-selected" : "nav-menus"}>
            <img src={detailsIcon} alt="icons" /> Details
        </NavLink>
        <NavLink to="code" className={({isActive}) => isActive ? "nav-menus nav-selected" : "nav-menus"}>
            <img src={codeIcon} alt="icons" /> Code
        </NavLink>
        <NavLink to="validation" className={({isActive}) => isActive ? "nav-menus nav-selected" : "nav-menus"}>
            <img src={checkIcon} alt="icons" /> Validation
        </NavLink>
        <NavLink to="build-history" className={({isActive}) => isActive ? "nav-menus nav-selected" : "nav-menus"}>
            <img src={historyIcon} alt="icons" /> Build History
        </NavLink>
      </div>
      <div className="nav-head-right">
        <button className='action-button'>TEST RUN</button>
      </div>
    </div>
  )
}

export default Nav
