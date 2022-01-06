import React from 'react'

const Image = (props) => {
    const  ImageClickHandle=(e)=>{
       e.target.classList.toggle('active');
    }
    return (
        <>
         <img src={props.src}style={{...props.style,"cursor":"zoom-in"}}
         className={props.className} onClick={(e)=>{
            ImageClickHandle(e);
        }}
        ></img>
        </>
    )
}

export default Image;
