import React from 'react'
import "./zagalovik.scss";
function index({ title = "defult title", des = "default des" }) {
    return (
        <div className='zagalovik-sec'>
            <h1 className='zagalovik-title'>{title}</h1>
            <p>{des}</p>
        </div >
    )
}

export default index