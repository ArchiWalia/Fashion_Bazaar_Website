import React from 'react'
import './Description.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
           <div className='descriptionbox-nav-box'>Description</div>
           <div className='descriptionbox-nav-box fade'>Reviews (130)</div>

        </div>
        <div className='descriptionbox-description'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nulla atque quia quaerat mollitia unde libero nesciunt iste autem saepe nemo et quam, quas excepturi laboriosam. Sed repellat numquam veritatis molestiae consequuntur tempora fuga quos!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ratione eos temporibus ad tempora facilis fuga. Iste cumque dolore dignissimos!</p>
        </div>
        
    </div>
  )
}

export default DescriptionBox