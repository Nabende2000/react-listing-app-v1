import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar-section">
            <div className='sidebar-subsection'>
              <span className='sidebar-title'>About Me</span>
              <img className='sidebar-img' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
              <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content</p>
            </div>

            <div className='sidebar-subsection'>
              <span className='sidebar-title'>Categories</span>
              <ul className='sidebar-categories'>
                  <li className='sidebar-category'>Buy</li>
                  <li className='sidebar-category'>Sell</li>
                  <li className='sidebar-category'>Rent</li>
                  <li className='sidebar-category'>Residential</li>
                  <li className='sidebar-category'>B & B</li>
                  <li className='sidebar-category'>Hotel</li>
              </ul>
            </div>

            <div className='sidebar-subsection'>
              <span className='sidebar-title'>Follow Us</span>
              <div className='sidebar-social-icons'>
                   <i className="sidebar-social-icon fab fa-instagram"></i>
                   <i className="sidebar-social-icon fab fa-facebook"></i>
                   <i className="sidebar-social-icon fab fa-linkedin"></i>
                   <i className="sidebar-social-icon fab fa-twitter"></i>
              </div>
            </div>
      </div>
  )
}

export default Sidebar