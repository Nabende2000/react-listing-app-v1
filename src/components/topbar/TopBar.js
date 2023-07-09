import React from 'react'
import './TopBar.css'
import { NavLink } from 'react-router-dom';

//React component returns JSX Kind of markup
function TopBar() {
  return (
    <div className='topbar'>
       <div className='topbar-left'>
            <i className="topbar-social-icon fab fa-instagram"></i>
            <i className="topbar-social-icon fab fa-facebook"></i>
            <i className="topbar-social-icon fab fa-linkedin"></i>
            <i className="topbar-social-icon fab fa-twitter"></i>
       </div>
       <div className='topbar-center'>
                <ul className='topbar-list'>
                    <li className='topbar-list-item'>
                        <NavLink  to="/"> Home </NavLink>
                    </li>
                    <li className='topbar-list-item'>About Us</li>
                    <li className='topbar-list-item'>Contact Us</li>
                    <li className='topbar-list-item'>
                        <NavLink to="/create"> Create Property </NavLink>
                    </li>
                    <li className='topbar-list-item'>Logout</li>
                </ul>
        </div>
       <div className='topbar-right'>
            <img className='topbar-profile' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <i className="topbar-search fas fa-search"></i>
        </div>
    </div>
  );
}

export default TopBar