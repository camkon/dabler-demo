import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Element = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Element
