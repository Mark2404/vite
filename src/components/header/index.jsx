import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, createContext } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import ModalWrapper from "../modal-wrapper";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { useStateValue } from "../../context";
import { useCart } from "../../context/CartContext.jsx";
import "../../utils/i18n.js";
import {
    faBalanceScale,
    faCreditCard,
    faTruck,
    faShoppingCart,
    faHeart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";


const Header = ({ setSearch }) => {
    const { wishlist } = useStateValue();
    const { t, i18n } = useTranslation();
    const { cart } = useCart();
    const [language, setLanguage] = useState("RU");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentLanguage = i18n.language;
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
                <Link to="/">
                    <img src="../assets/asaxiy-logo.svg" alt="" />
                </Link>

                <button className="categories-btn">
                    ☰ <span>{t("categories")}</span>
                </button>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder={t("searchText")}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button> {t("searchText")}</button>

                </div>
            </div>

            <div className="header__icons container">
                <div className="icon">
                    <FontAwesomeIcon icon={faBalanceScale} />
                    <p>{t("balance")}</p>
                </div>

                <div className="icon">
                    <FontAwesomeIcon icon={faCreditCard} />
                    <p >{t("payment")}</p>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faTruck} />
                    <p>{t("delivery")}</p>
                </div>
                <div className="icon wishlist-count">
                    <Link to="/cart">

                        <FontAwesomeIcon icon={faShoppingCart} />
                        <p>{t("cart")}</p>
                        <p className="count">{cart.length} </p>

                    </Link>

                </div>
                <div className="icon">

                    <Link to="/favorites">

                        <div className="wishlist-count icon">
                            <FontAwesomeIcon icon={faHeart} />
                            <p>{t("favorites")}</p>
                            <p className="count">{wishlist.length}</p>
                        </div>

                    </Link>

                </div>
                <button
                    className="language-btn"
                    onClick={() => {
                        const newLanguage = currentLanguage === "ru" ? "uz" : "ru";
                        i18n.changeLanguage(newLanguage);
                    }}
                >
                    {currentLanguage === "ru" ? "O'zbekcha" : "Русский"}
                </button>
                <div className="icon" onClick={showLoading}>
                    <FontAwesomeIcon icon={faUser} />
                    <p>{t("profile")}</p>
                </div>
                <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
                    {loading ? "Loading..." : < ModalWrapper setOpen={setOpen} />}
                </Modal>
            </div>
        </header>
    );
};

export default memo(Header);
