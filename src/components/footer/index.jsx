import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faStore, faTruck, faBoxOpen, faF } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTelegram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const index = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__column">
                        <h3>{t("information")}</h3>
                        <ul>
                            <li><a href="#">{t("faq")}</a></li>
                            <li><a href="#">{t("news")}</a></li>
                            <li><a href="#">{t("blog")}</a></li>
                            <li><a href="#">{t("ourBrands")}</a></li>
                            <li><a href="#">{t("career")}</a></li>
                            <li><a href="#">{t("offer")}</a></li>
                            <li><a href="#">{t("publicOffer")}</a></li>
                            <li><a href="#">{t("aboutUs")}</a></li>
                            <li><a href="#">{t("sitemap")}</a></li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>{t("contactUs")}</h3>
                        <ul className="with-icons">
                            <div>
                                <FontAwesomeIcon icon={faPhone} /> <li> +998 71 200 01 05</li>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />    <li>info@asaxiy.uz</li>
                            </div>
                            <div><FontAwesomeIcon icon={faTelegram} /><li> {t("telegramBot")}</li></div>
                            <div> <FontAwesomeIcon icon={faMapMarkerAlt} />  <li>{t("address")}</li></div>

                        </ul>


                        <h3>{t("loyaltyPrograms")}</h3>
                        <ul>
                            <li>{t("elYurtStatus")}</li>
                            <li>{t("asaxiyPlus")}</li>
                            <li>{t("asaxiyPlusOffer")}</li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>{t("deliveryAndStores")}</h3>
                        <ul className="with-icons">
                            <div className="map">
                                <FontAwesomeIcon icon={faStore} />  <li>{t("ourStores")}</li>
                            </div >
                            <div className="map">
                                <FontAwesomeIcon icon={faBoxOpen} />  <li>{t("pickupPoints")}</li>
                            </div>
                            <div className="map">
                                <FontAwesomeIcon icon={faTruck} />  <li> {t("delivery")}</li>
                            </div>



                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>{t("paymentMethods")}</h3>
                        <ul className="debit-cards">
                            <div>
                                <li>Uzum</li>
                                <li>Payme</li>
                            </div>
                            <div>
                                <li>VISA</li>
                                <li>Mastercard</li>
                            </div>
                            <div>
                                <li>HUMO</li>
                                <li>Uzcard</li>
                            </div>


                        </ul>
                        <h3>{t("socialMedia")}</h3>
                        <div className="social-icons">

                            <FontAwesomeIcon className="footer-icon" icon={faInstagram} />

                            <FontAwesomeIcon className="footer-icon" icon={faFacebook} />



                            <FontAwesomeIcon className="footer-icon" icon={faTelegram} />

                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>{t("footerP")}</p>
                </div>
            </div>
        </footer>
    )
}

export default index