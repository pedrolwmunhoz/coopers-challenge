import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer'>
                <img  className='footer-bgImg' alt="img" src = {require(`../../data/image5.png`)}/>
            <div className='footerText-container'>
                    <h1 className='needHelp-text'>Need Help?</h1>
                    <h2 className='needHelp-text'>coopers@coopers.pro</h2>
                    <p className='allRights-text'>© 2021 Coopers. All rights reserved.</p>

            </div>
        </div>

    </div>
  )
}

export default Footer