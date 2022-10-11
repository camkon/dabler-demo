import react, { useEffect, useState } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import folderIcon from '../../assets/icons/folder.svg'

const Projects = () => {

  return (
    <div className='projects-container'>
      <NavLink className='projects-links' to="project-1"><img src={folderIcon} alt="folder" /> Project 1</NavLink>
      <NavLink className='projects-links' to="project-2"><img src={folderIcon} alt="folder" /> Project 2</NavLink>
      <NavLink className='projects-links' to="project-3"><img src={folderIcon} alt="folder" /> Project 3</NavLink>
    </div>
  )
}

export default Projects
