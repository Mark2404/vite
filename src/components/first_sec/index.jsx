import React from 'react'
import './index.scss';


import styled from 'styled-components';
const HeaderStyle = styled.div`
padding: 20px;
`


function index() {
    return (
        <div>
            <HeaderStyle>
                <header className='container'>
                    <img src="./assets/logo.svg" alt="" />
                    <div className='navButtons'>
                        <a href="#">Sign in</a>
                        <button>Sign up</button>
                    </div>
                </header>
            </HeaderStyle>
            <div className='container first_sec-title'>
                <h1>Make your website <br /> <span>wonderful</span></h1>
                <p>Our landing page template works on all devices, so you only have to
                    set it up once, and get beautiful results forever.</p>
                <div>
                    <button>Start free trial</button>
                    <button>Learn more</button>
                </div>
            </div>
            <div className='container first_sec-image'>
                <div className='ball '>
                </div>
                <div className='bg-sec'>
                    <img src="./assets/black-bg.svg" alt="" />
                    <button><img src="./assets/play-icon.svg" alt="" />Watch the full video (2 min)</button>
                </div>
                <div className='ball2'></div>

            </div>

        </div>
    )
}

export default index