import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'

const Widget = ({ title, isMoney, link, icon, amount, diff }) => {
  console.log(title, isMoney, link, icon)

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{title}</span>
        <span className='counter'>
          {isMoney ? `${amount}` : ''}{' '}
          <CurrencyExchangeOutlinedIcon style={{ color: 'green' }} />
        </span>
        <span className='link'>{link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {icon}
      </div>
    </div>
  )
}

export default Widget
