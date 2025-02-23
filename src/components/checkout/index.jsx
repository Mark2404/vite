import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Modal, Box, Button } from "@mui/material";

const Checkout = () => {
    const [formData, setFormData] = useState({
        phone: "",
        fullName: "",
        region: "",
        city: "",
        deliveryMethod: "door",
        address: "",
        landmark: "",
        workAddress: "",
        comment: "",
        promoCode: "",
        paymentMethod: "online"
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <h2 className="checkout-title container">Оформление заказа</h2>
            <div className="checkout-container container">
                <form>
                    <div className="input-box">
                        <div className="input-group">
                            <label>Телефон *</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="998_ _ ___ __ __" required />
                        </div>
                        <div className="input-group">
                            <label>Ф.И.О *</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Введите ваше имя" required />
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-group custom-select">
                            <label>Область *</label>
                            <select name="region" value={formData.region} onChange={handleChange} required>
                                <option value="">Выберите область</option>
                                <option value="tashkent">Ташкент</option>
                                <option value="samarkand">Самарканд</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Город / Район *</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Выберите город" required />
                        </div>
                    </div>

                    <h3 className="delevery">Способ получения</h3>
                    <div className="delevery-box">
                        <div className="delivery-options">
                            <div className={formData.deliveryMethod === "door" ? "active" : ""} onClick={() => setFormData({ ...formData, deliveryMethod: "door" })}>
                                <h5>Доставка до двери</h5>
                                <p>Стоимость доставки: 30 000 сум</p>
                            </div>
                            <div className={formData.deliveryMethod === "pickup" ? "active" : ""} onClick={() => setFormData({ ...formData, deliveryMethod: "pickup" })}>
                                <h5>Пункт выдачи</h5>
                                <p> Бесплатная доставка</p>
                            </div>
                        </div>
                    </div>

                    {formData.deliveryMethod === "door" && (
                        <div className="input-box">
                            <div className="input-group">
                                <label>Адрес *</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label>Ориентир</label>
                                <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} />
                            </div>
                        </div>
                    )}

                    <h3>Способ оплаты</h3>
                    <div className="payment-options">
                        <button type="button" className={formData.paymentMethod === "online" ? "active" : ""} onClick={() => setFormData({ ...formData, paymentMethod: "online" })}>Картой онлайн</button>
                        <button type="button" className={formData.paymentMethod === "cash" ? "active" : ""} onClick={() => setFormData({ ...formData, paymentMethod: "cash" })}>При получении</button>
                        <button type="button" className={formData.paymentMethod === "balance" ? "active" : ""} onClick={() => setFormData({ ...formData, paymentMethod: "balance" })}>Оплата с лицевого счёта</button>
                    </div>
                    <div className="agreement">
                        <input type="checkbox" />
                        <p>Я согласен с <span>условиями</span> покупки товаров</p>
                    </div>

                    <div className="back-box">
                        <Button variant="contained" color="primary" onClick={handleOpen} className="checkout-btn">Оформить заказ</Button>
                        <Link to="/cart"><p>назад</p></Link>
                    </div>
                </form>

                {/* Modal */}
                <Modal open={open} onClose={handleClose}>
                    <Box sx={{ p: 4, bgcolor: "background.paper", margin: "auto", maxWidth: 400, mt: 10, borderRadius: 2 }}>
                        <h3>Подтверждение заказа</h3>
                        <p><strong>Телефон:</strong> {formData.phone}</p>
                        <p><strong>Ф.И.О:</strong> {formData.fullName}</p>
                        <p><strong>Область:</strong> {formData.region}</p>
                        <p><strong>Город:</strong> {formData.city}</p>
                        <p><strong>Способ получения:</strong> {formData.deliveryMethod === "door" ? "Доставка до двери" : "Пункт выдачи"}</p>
                        {formData.deliveryMethod === "door" && <p><strong>Адрес:</strong> {formData.address}</p>}
                        <p><strong>Способ оплаты:</strong> {formData.paymentMethod}</p>
                        <Button variant="contained" color="success" onClick={handleClose}>Подтвердить</Button>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default Checkout;
