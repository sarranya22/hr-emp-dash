import React from 'react'
import logo from '../../src/assets/logo.png';
import headermenuOne from '../../src/assets/headerOne.png';
import chat from '../../src/assets/chat.png'
import notification from '../../src/assets/notification.png';
import settings from '../../src/assets/settings.png'
import user1 from '../../src/assets/user1.png'
import search from '../../src/assets/search.png'
import './Header.css'

const Header = () => {
  return (
    <div className="row py-3 header-layout">
      <div className="col-12 col-md-3">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="col-12 col-md-6">
        <input type="text" placeholder='Search' className='input-text' />
      </div>
      <div className="col-12 col-md-3">
        <div>
          <ul className="d-flex">
            <li>
              <img src={headermenuOne} className="header-icon" alt="logo" />
            </li>
            <li>
              <img src={chat} className="header-icon ps-4" alt="logo" />
            </li>
            <li>
              <img src={notification} className="header-icon ps-4" alt="logo" />
            </li>
            <li>
              <img src={settings} className="header-icon ps-4" alt="logo" />
            </li>
            <li>
              <img src={user1} className="header-icon ps-4" alt="logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

{/* <nav className="navbar">
<img src={logo} className="App-logo" alt="logo" /> */}
{/* <input type="text" placeholder="Search" /> */ }
{/* <img src={search} className="header-icon" alt="logo" /> */ }
{/* <div>
 
</div>
<div>
  <ul className="menu_list">
    <li>
      <img src={headermenuOne} className="header-icon" alt="logo" />
    </li>
    <li>
      <img src={chat} className="header-icon" alt="logo" />
    </li>
    <li>
      <img src={notification} className="header-icon" alt="logo" />
    </li>
    <li>
      <img src={settings} className="header-icon" alt="logo" />
    </li>
    <li>
      <img src={user1} className="header-icon" alt="logo" />
    </li>
  </ul>
</div>
</nav> */}