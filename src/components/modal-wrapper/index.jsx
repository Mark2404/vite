import "./index.scss";
import { useState } from "react";
import { Input } from "antd";
import InputMask from "react-input-mask";

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
const App = () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const showLoading = () => {
        setOpen(true);
        setLoading(true);


        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
}
const index = ({ }) => {


    return (

        <>
            <div className="modal-wrapper-login">


                <div className="modal-text-sec">
                    <h1>Вход или создать личный кабинет</h1>
                    <div>
                        <label htmlFor="tel">Телефон</label>
                        <input type="number" id="tel" placeholder="+998 (99)-999-99-99" />

                    </div>

                </div>
                <div className="or">
                    <p>или</p>
                </div>
                <div className="social-icons">
                    <div>
                        <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                </div>


            </div>

        </>
    )
}

export default index