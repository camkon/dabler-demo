import { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Path from '../components/Path'
import { Outlet, useNavigate } from 'react-router-dom'
import { PathContext } from '../utils/pathContext'

const Layout = () => {

  const navigate = useNavigate()
  const [path, setPath] = useState([])

  return (
    <Container>
      <Header />
      <PathContext.Provider value={{path, setPath}}>
        <Path />
        <OutletContainer>
          <Button onClick={() => {navigate('/projects', {state: {path: 'Projects'}})}}>PROJECTS</Button>
          <Outlet />
        </OutletContainer>
      </PathContext.Provider>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  height: auto;
  width: 100%;
`

const OutletContainer = styled.div`
  height: auto;
  // height: calc(100vh - 8.6rem);
  width: calc(100% - 5rem);
  // padding: 2.5rem;  
  margin: 0 2.5rem 0 3rem;  
  background-color: #ccc;
  box-sizing: border-box;
`

const Button = styled.button`
  padding: 0.5rem 0.75rem;
  border: none;
  background-color: #ddd;
  border-radius: 0.5rem;
`