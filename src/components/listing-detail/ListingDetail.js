import React from 'react'
import './ListingDetail.css'

function ListingDetail() {
  return (
    <div className='listing-detail'>
      <div className='listing-detail-content'>
        <img className='listing-detail-img' src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <h1 className='listing-detail-title'>
              Awesome property
              <div className='listing-detail-action'>
                  <i class='listing-detail-action-icon fas fa-edit'></i>
                  <i class='listing-detail-action-icon fas fa-trash-alt'></i>
              </div>
        </h1>
        <div className='listing-detail-meta-info'>
            <span className='listing-detail-author'>Author - <strong>John Doe</strong></span>
            <span className='listing-detail-time'>1 day ago</span>
        </div>
        <p className='listing-detail-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis risus at enim malesuada ultrices non vitae nulla. Maecenas nibh leo, porta elementum odio at, lacinia viverra massa. Nunc in venenatis metus. Morbi dictum volutpat maximus. Donec placerat condimentum molestie. Aliquam pulvinar, libero a dignissim rhoncus, felis dolor vulputate massa, in ornare nisl nulla eu ex. Phasellus vel erat eget tellus dignissim volutpat.

        Phasellus pulvinar purus sit amet nulla vestibulum hendrerit. In hac habitasse platea dictumst. In ac tristique magna. Integer sodales erat vel odio dignissim, sed egestas augue mollis. Sed efficitur interdum fringilla. Phasellus tincidunt vel lacus sed porta. Proin tincidunt sapien posuere aliquet aliquam. Praesent commodo pellentesque arcu vel pretium. Curabitur id nulla non nibh faucibus tempor. Pellentesque metus nibh, bibendum nec diam vel, cursus faucibus sapien. Etiam laoreet viverra mauris, eu sollicitudin leo molestie nec. Nullam posuere, libero at imperdiet placerat, elit arcu rutrum felis, non dictum lorem est nec odio.
        </p>
      </div>
    </div>
  )
}

export default ListingDetail