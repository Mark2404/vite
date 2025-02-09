import React from 'react'
import "./slides.scss";

function index({ img, title, des }) {
    return (
        <div className='slide'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{des}</p>

        </div>
    )
}

export default index