import React, { useState, useEffect, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './index.scss'
import { ElementContext } from '../../../utils/elementContext'
//assests
import detailsIcon from '../../../assets/icons/vector.svg'
import codeIcon from '../../../assets/icons/code.svg'
import checkIcon from '../../../assets/icons/check_ring.svg'
import historyIcon from '../../../assets/icons/history.svg'

const Nav = () => {

  const nav = useNavigate()
  const {codeCodeData, codeTableData} = useContext(ElementContext)
  const [codeData, setCodeData] = codeCodeData
  const [codeTable, setTable] = codeTableData
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    nav('code')
  }, [])

  const runTest = () => {
    setLoading(true)
    fetch("https://transform.dabler.app/api/test/runquery", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        query: `${codeData}`,
        // query: "customer_vw",
      }),
    })
    .then((res) => res)
    .then(async (getData) => {
      const data = await getData.json()
      if (getData.status === 200) {
        // localStorage.setItem('table-data', JSON.stringify(data))
        setLoading(false)
        setTable(data)
      }else {
        setLoading(false)
      }
    });
  }

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
        <button className='action-button' onClick={runTest}>TEST RUN</button>
        {loading && <div className='action-loading'></div>}
      </div>
    </div>
  )
}

export default Nav
