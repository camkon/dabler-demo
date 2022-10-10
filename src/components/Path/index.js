import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PathContext } from '../../utils/pathContext'
import './index.scss'

import arrowIcon from '../../assets/icons/nav-1.svg'

const Path = () => {

  const loc = useLocation()
  const {path, setPath} = useContext(PathContext)

  useEffect(() => {
    setPath([...path, loc.state.path])
    console.log(path);
  }, [loc])

  return (
    <div className='path-container'>
      <div className="path-left">
      {
        path.map((i) => {
          return(
            <div className='indi-paths'>{i} <img className='path-navicon' src={arrowIcon} alt="naigate" /></div>
          )
        })
      }
      </div>
      <div className="path-right">buttons</div>
    </div>
  )
}

export default Path
