import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faStore, faTruck, faBoxOpen, faF } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTelegram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const index = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__column">
                        <h3>Информация</h3>
                        <ul>
                            <li><a href="#">Часто задаваемые вопросы</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">Наши бренды</a></li>
                            <li><a href="#">Карьера в Asaxiy</a></li>
                            <li><a href="#">Оферта для рассрочки</a></li>
                            <li><a href="#">Публичная оферта</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Карта сайта</a></li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>Для связи</h3>
                        <ul className="with-icons">
                            <div>
                                <FontAwesomeIcon icon={faPhone} /> <li> +998 71 200 01 05</li>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />    <li>info@asaxiy.uz</li>
                            </div>
                            <div><FontAwesomeIcon icon={faTelegram} /><li> Telegram bot</li></div>
                            <div> <FontAwesomeIcon icon={faMapMarkerAlt} />  <li>улица Чиланзар 45/2, Ташкент</li></div>

                        </ul>


                        <h3>Программы лояльности</h3>
                        <ul>
                            <li>Статус «El-yurt ishonchi»</li>
                            <li>«Asaxiy Plus»</li>
                            <li>Оферта «Asaxiy Plus»</li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>Доставка и магазины</h3>
                        <ul className="with-icons">
                            <div className="map">
                                <FontAwesomeIcon icon={faStore} />  <li>Наши магазины</li>
                            </div >
                            <div className="map">
                                <FontAwesomeIcon icon={faBoxOpen} />  <li>Пункты выдачи</li>
                            </div>
                            <div className="map">
                                <FontAwesomeIcon icon={faTruck} />  <li> Доставка</li>
                            </div>



                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>Виды оплаты</h3>
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
                        <h3>Мы в соц. сетях</h3>
                        <div className="social-icons">

                            <FontAwesomeIcon className="footer-icon" icon={faInstagram} />

                            <FontAwesomeIcon className="footer-icon" icon={faFacebook} />



                            <FontAwesomeIcon className="footer-icon" icon={faTelegram} />

                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>2015 - 2025 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров осуществляется во все регионы. Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}

export default index