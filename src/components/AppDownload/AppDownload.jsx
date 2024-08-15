import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For better experience, download <br /> the Do Eat app now</p>
      <div className="app-download-platform">
      <Link to='https://play.google.com/store/apps/details?id=com.codedeals.doeats'>
      <img src={assets.play_store} alt="" />  </Link>
        <img src={assets.app_store} alt="" />
       
      </div>
    </div>
  )
}

export default AppDownload
