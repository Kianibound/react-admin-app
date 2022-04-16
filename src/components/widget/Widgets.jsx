import React from 'react'
import Widget from './Widget'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'

const Widgets = () => {
  const data = [
    {
      title: 'USERS',
      isMoney: true,
      amount: '100',
      diff: '+20',
      link: 'See all users',
      icon: (
        <PersonOutlineIcon
          className='icon'
          style={{
            color: 'crimson',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          }}
        />
      ),
    },
    {
      title: 'USERS',
      isMoney: true,
      amount: '80',
      diff: '+15',
      link: 'See all users',
      icon: (
        <ShoppingCartIcon
          className='icon'
          style={{
            color: 'crimson',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          }}
        />
      ),
    },
    {
      title: 'USERS',
      isMoney: true,
      amount: '130',
      diff: '5',
      link: 'See all users',
      icon: (
        <PaidOutlinedIcon
          className='icon'
          style={{
            color: 'crimson',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          }}
        />
      ),
    },
    {
      title: 'USERS',
      isMoney: true,
      diff: '+3',
      amount: '250',
      link: 'See all users',
      icon: (
        <CurrencyExchangeOutlinedIcon
          className='icon'
          style={{
            color: 'crimson',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          }}
        />
      ),
    },
  ]
  return (
    <>
      {data.map((item, index) => {
        return (
          <Widget
            key={index}
            title={item.title}
            isMoney={item.isMoney}
            link={item.link}
            icon={item.icon}
            amount={item.amount}
            diff={item.diff}
          />
        )
      })}
    </>
  )
}

export default Widgets
