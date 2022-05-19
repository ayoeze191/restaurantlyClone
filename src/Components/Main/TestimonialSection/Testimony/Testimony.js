import React from 'react'
import './Testimony.css'




const Testimony = (props) => {
  return (
    <>
        <p className='Testimony-story'>
          {props.story}
           </p>
           <div className='Testimony-img-name'>
             <div className='Testimony-image-div'>
             <img src={props.image} />
             </div>
             <div className='Testimony-sen'>
               <h3>{props.name}</h3>
               <h4>{props.occupation}</h4>
             </div>
             </div>        
    </>
  )
}

export default Testimony