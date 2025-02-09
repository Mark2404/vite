import React from 'react'
import "./cards.scss";

function index({ h3, description }) {
    return (
        <div className='card'>
            <div className='card-info'>
                <div>

                </div>
                <h3>{h3}</h3>
                <p>{description}</p>

            </div>
            <img src="./assets/card-icon2.svg" alt="" />
        </div>
    )
}

export default index