import React from 'react'
import './Testimony.css'




const Testimony = (props) => {
  return (
    <div className='Testimony'>
        <p className='story'>
          {props.story}
           </p>
           <div className='img-name'>
             <div className='image-div'>
             <img src={props.image} />
             </div>
             <div>
               <h3>{props.name}</h3>
               <h4>{props.occupation}</h4>
             </div>
             </div>        
    </div>
  )
}

export default Testimony