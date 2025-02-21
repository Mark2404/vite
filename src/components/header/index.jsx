import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, createContext } from "react";
import { Link } from "react-router-dom";


import { useStateValue } from "../../context";
import {
    faBalanceScale,
    faCreditCard,
    faTruck,
    faShoppingCart,
    faHeart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "antd";
import ModalWrapper from "../modal-wrapper";
import "./index.scss";
export const TextContext = createContext();
const Header = ({ setSearch }) => {
    const { wishlist } = useStateValue();
    const [language, setLanguage] = useState("RU");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <header className="header">
            <div className="header__left container">
                <h1 className="logo">asaxiy</h1>
                <button className="categories-btn">
                    ☰ <span>Категории</span>
                </button>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Поиск..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>Искать</button>
                </div>
            </div>

            <div className="header__icons container">
                <div className="icon">
                    <FontAwesomeIcon icon={faBalanceScale} />
                    <p>сравнение</p>
                </div>

                <div className="icon">
                    <FontAwesomeIcon icon={faCreditCard} />
                    <p>оплата</p>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faTruck} />
                    <p>доставка</p>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>корзина</p>
                </div>
                <div className="icon">

                    <Link to="/favorites">
                        <FontAwesomeIcon icon={faHeart} />
                        <p>избранное</p>
                        <p>{wishlist.length}</p>
                    </Link>

                </div>
                <button
                    className="language-btn"
                    onClick={() => setLanguage(language === "RU" ? "UZ" : "RU")}
                >
                    {language === "RU" ? "O'zbekcha" : "Русский"}
                </button>
                <div className="icon" onClick={showLoading}>
                    <FontAwesomeIcon icon={faUser} />
                    <p>войти</p>
                </div>
                <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
                    {loading ? "Loading..." : < ModalWrapper setOpen={setOpen} />}
                </Modal>
            </div>
        </header>
    );
};

export default memo(Header);
