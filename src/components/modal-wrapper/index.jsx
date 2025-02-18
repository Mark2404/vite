import "./index.scss";
import { useState } from "react";
const index = ({ title, des, button }) => {

    return (

        <>
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <h1>{title}</h1>
                    <p>{des}</p>

                    {button}

                </div>
            </div>


        </>
    )
}

export default index