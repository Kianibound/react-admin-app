import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'

const New = ({ title, inputs }) => {
  const [uploadImage, setUplaodImage] = useState('')
  const [inputData, setInputData] = useState([])
  const [formTitle, setFormTitle] = useState('')

  useEffect(() => {
    setInputData(inputs)
    setFormTitle(title)
  }, [inputs, title])

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{formTitle}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                uploadImage
                  ? URL.createObjectURL(uploadImage)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt='avatar'
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => setUplaodImage(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              {inputData.map((input) => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
