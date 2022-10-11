import { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Path from '../components/Path'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { PathContext } from '../utils/pathContext'

const Layout = () => {

  const navigate = useNavigate()
  const path = []

  const loc = useLocation()

  useEffect(() => {
    console.log(loc.state);
  })

  return (
    <Container>
      <Header />
      {/* <PathContext.Provider value={{path, setPath}}> */}
      <PathContext.Provider value={path}>
        <Path />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </PathContext.Provider>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  position: relative;
  height: auto;
  width: 100%;
`

const OutletContainer = styled.div`
  height: auto;
  width: calc(100% - 4rem);
  padding-bottom: 2.5rem;  
  margin: 0 2.5rem 0 2rem;  
  // background-color: red;
  box-sizing: border-box;
`

const Button = styled.button`
  padding: 0.5rem 0.75rem;
  margin: 2rem 0;
  border: none;
  background-color: #ddd;
  border-radius: 0.5rem;
`