import { useState } from "react";

import "./Book.css"


const Card=(props)=>{
  // console.log(props.data)

  const [hoverclass , sethoverClass] = useState(false)
  const hoverFun = ()=>{
    // console.log('hoverrrr')
    // sethoverClass('sethover')
  }
    
    return (
        <div className='book-container'>
       <div className="bookImage-title" 
            // // onMouseOver={hoverFun} 
            // onMouseEnter={()=>{sethoverClass(true)}}
            // onMouseLeave={()=>{sethoverClass(false)}}
            onClick={()=>{sethoverClass(true)}}
            // style={{backgroundImage : `url(${props.data.volumeInfo.imageLinks.smallThumbnail})`}}
        >
          <img src={props.data.images[0]} alt="im" style={{"width":"100%"}} />
            {/* <h6>{props.data.volumeInfo.title}</h6> */}
        </div>
        <h1>{hoverclass}</h1>


        <div style={{display: !hoverclass ? "none":""}}>
            

        <div 
        className="hover" 
        style={{backgroundImage : `url(${props.data.images[0]})`}}
        >
            <div className="detailes-div">
              <button onClick={()=>{sethoverClass(false)}}>cancle</button>
            <h5>{props.data?.brand}</h5>
            <h3>{props.data?.category}</h3>
            <h5>{props.data?.description}</h5>

            <h5>{props.data.price}</h5>
            </div>


        </div>
        </div>

    
        </div>
    )
}

export default Card;