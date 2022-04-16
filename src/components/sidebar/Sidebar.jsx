import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import AllInboxIcon from '@mui/icons-material/AllInbox'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'

import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Kia Admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <ProductionQuantityLimitsIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ShoppingBasketIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <AllInboxIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className='icon' />
            <span>Notifications</span>
          </li>

          <p className='title'>USER</p>
          <li>
            <AccountBoxOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon' />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOptions'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOptions'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
