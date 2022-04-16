import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Avatar from './avatar2.jpg'
import Chart from '../../components/chart/Chart'
import Tables from '../../components/table/Tables'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editBtn'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src={Avatar} alt='avatar' className='itemImg' />
              <div className='details'>
                <h1 className='itemTitle'>John Doe</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>johndoe@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+1 2345 67 89</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User Spending Last 6 Months' />
          </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Single
