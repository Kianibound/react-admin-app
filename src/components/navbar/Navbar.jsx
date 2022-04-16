import React, { useContext } from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import NightlightIcon from '@mui/icons-material/Nightlight'
import GridViewIcon from '@mui/icons-material/GridView'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import Avatar from './avatar.jpg'
import { DarkModeContext } from '../../context/darkModeContext'
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='search' />
          <SearchOutlinedIcon className='icon' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className='item' onClick={() => dispatch({ type: 'TOGGLE' })}>
            <NightlightIcon className='icon' />
          </div>
          <div className='item'>
            <GridViewIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsActiveOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ListOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <img src={Avatar} alt='avatar' className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
