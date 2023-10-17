import React, { useState } from 'react'
import './navbar.css';
import chaperoneImg from '../assest/chaperoneImg.svg';
import profileImg from '../assest/profileImg.svg';
import cartImg from '../assest/cartImg.svg';
import subtractIcon from '../assest/subtractIcon.svg';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems.js';


const Item = ({ item }) => {

  const [toolchild, setToolChild] = useState(false);
  const [serviceChild, setServiceChild] = useState(false);

  const getHandling = () => {
    if (item.type === "link") {
      return (
        <Link to={item.url} className={item.cName}>
          {item.name}
        </Link>

      );
    }

    else if (item.type === "childLink") {

      return (
        <>
          <div onClick={() => { setToolChild(!toolchild) }}>
            {item.name}<img src={subtractIcon} alt='' className='subtract-Icon' />

          </div>

        </>

      )
    }

    else {
      return (
        <>
          <div onClick={() => { setServiceChild(!serviceChild) }}>
            {item.name}<img src={subtractIcon} alt='' className='subtract-Icon' />

          </div>
        </>

      )
    }

  }

  return (

    <li key={item.id}>
      {getHandling()}


      {toolchild && item.child && (
        <ul className="sub-menu-1">
          {item.child.map((subChildItem) => (
            <li key={subChildItem.id} >
              <Link to={subChildItem.url} className={subChildItem.cName} >
                {subChildItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {serviceChild && item.ourServiceChild && (
        <ul className="sub-menu-2">
          {item.ourServiceChild.map((item) => (
            <li key={item.id} >
              <Link to={item.url} className={item.cName}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}





    </li>


  )

}



const Navbar = () => {

  return (
    <>

      <nav className='navbar nav-width'>
        <div className='navbar-logo'>
          <img src={chaperoneImg} alt='' />
          <h2>Chaperone</h2>

        </div>
        <div className='navbar-menu'>
          <ul className='navbar-list'>
            {MenuItems.map((item, index) => {
              return (
                <Item item={item} key={index} />
              )
            })}

          </ul>

        </div>

        <div className='navbar-icons'>
          <div className='c-profileImg'> <img src={profileImg} alt='' />
            <p>Profile</p>
          </div>
          <div className='c-cartImg'><img src={cartImg} alt='' />
            <p>Cart</p>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar;