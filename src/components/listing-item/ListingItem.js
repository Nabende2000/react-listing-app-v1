import React from 'react'
import './ListingItem.css'
import {Link} from 'react-router-dom';

function ListingItem() {
  return (
    <div className='listing-item'>
        <img className='listing-img' src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <div className='listing-details'>
             <div className='listing-categories'>
                  <span className='listing-category'>Buy</span>
                  <span className='listing-category'>Sell</span>
             </div>
             <Link to="/detail/1"><span className='listing-title'>Awesome property</span>  </Link>
             <hr />
             <span className='listing-time'>2 days ago</span>
        </div>

        <p className='listing-description'>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content</p>
       
    </div>
  )
}

export default ListingItem