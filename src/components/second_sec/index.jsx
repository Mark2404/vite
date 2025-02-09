import React from 'react'
import "./second.scss";
import Zagalovik from "/src/components/zagalovik";
import Card from "../cards";

const zagalovokdata =
    [{
        title: "Explore the solutions",
        des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
    }]
const cardInfo = [
    {
        h3: "Building the Simple ecosystem",
        description: "Take collaboration to the next level with security and administrative features built for teams.",
    },
    {
        h3: "Enhancing Teamwork",
        description: "Work seamlessly with your team using our advanced tools and integrations.",
    },
    {
        h3: "Security First",
        description: "We ensure your data is protected with top-notch security features.",
    }
];
function index() {
    return (
        <div>
            <Zagalovik title={zagalovokdata[0].title} des={zagalovokdata[0].des} />
            <div className='container powerful-tools-sec'>

                <div className='powerful-tools-title'>
                    <h3 className='powerful-tools-title-h3'>Powerful suite of tools</h3>
                    <p className='powerful-tools-title-p'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                    {cardInfo.map((item, index) => (
                        <Card key={index} h3={item.h3} description={item.description} />
                    ))}
                </div>
                <img src="./assets/codes-bg.svg" alt="" />
            </div>
        </div>
    )
}

export default index