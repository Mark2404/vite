import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBalanceScale,
    faCreditCard,
    faTruck,
    faShoppingCart,
    faHeart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";


const Header = ({ setSearch }) => {
    const [language, setLanguage] = useState("RU");
    return (
        <header className="header ">
            <div className="header__left container">
                <h1 className="logo">asaxiy</h1>
                <button className="categories-btn">
                    ☰ <span>Категории</span>
                </button>
                <div className="search-bar">
                    <input type="text" placeholder="Поиск..." onChange={(e) => setSearch(e.target.value)} />
                    <button>Искать</button>

                </div>
            </div>

            <div className="header__icons container">
                <div className="icon">
                    <FontAwesomeIcon icon={faBalanceScale} className="icon" />
                    <p>сравнение</p>
                </div>

                <div className="icon">
                    <FontAwesomeIcon icon={faCreditCard} className="icon" />
                    <p>оплата</p>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faTruck} className="icon" />
                    <p>доставка</p>
                </div>
                <div className="icon ">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>корзина</p>
                </div>
                <div className="icon " >
                    <FontAwesomeIcon icon={faHeart} />
                    <p>избранное</p>
                </div>
                <button
                    className="language-btn"
                    onClick={() => setLanguage(language === "RU" ? "UZ" : "RU")}
                >
                    {language === "RU" ? "O'zbekcha" : "Русский"}
                </button>
                <div className="icon">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <p>войти</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
