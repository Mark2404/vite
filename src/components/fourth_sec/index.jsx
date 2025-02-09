import React from 'react'
import "./index.scss";
import Zagalovik from "../zagalovik";
function index() {
    return (
        <div>
            <div className='container fourth-sec-title'>

                <Zagalovik title='Trusted by over 20,000 companies all over the world' des='Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis 
blandit libero cursus mattis.' />
                <img src="./assets/Logos.svg" alt="" />
                <div className='pf-card'>
                    <img src="./assets/avatar.svg" alt="" />
                    <p>“ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “</p>
                    <b>Darya Finger</b>
                    <a href="#">CEO & Co-Founder <span>@Dropbox</span> </a>
                </div>
            </div>

        </div>
    )
}

export default index