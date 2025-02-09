import React from 'react'
import "./index.scss";
import Zagalovka from "../zagalovik";
import Slides from "../slides";
const slidesData = [
    {
        img: "./assets/slide1.svg",
        title: "Explore the solutions",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        img: "./assets/slide2.svg",
        title: "Explore the solutions",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        img: "./assets/slide3.svg",
        title: "Explore the solutions",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        img: "./assets/slide4.svg",
        title: "Explore the solutions",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        img: "./assets/slide5.svg",
        title: "Explore the solutions",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        img: "./assets/slide6.svg",
        title: "Explore the solutions",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
]
function index() {
    return (
        <div className='slides-container'>
            <Zagalovka title='How Simple works' des='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.' />
            <div className='slides-sec container'>


                {slidesData.map((item, index) => (
                    <Slides key={index} img={item.img} title={item.title} des={item.des} />
                ))}




            </div>
            <div className='slide-bg'>

            </div>

        </div>
    )
}

export default index