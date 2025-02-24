import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Modal, Box, Button } from "@mui/material";

import { useTranslation } from "react-i18next";

const Checkout = () => {
    const { t } = useTranslation();
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
                            <label>{t("phone")}</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="998_ _ ___ __ __" required />
                        </div>
                        <div className="input-group">
                            <label>{t("fullName")}</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder={t("fullName")} required />
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-group custom-select">
                            <label>{t("region")}</label>
                            <select name="region" value={formData.region} onChange={handleChange} required>
                                <option value="">{t("chooseRegion")}</option>
                                <option value="tashkent">{t("tashkent")}</option>
                                <option value="samarkand">{t("samarkand")}</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>{t("city")}</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder={t("chooseCity")} required />
                        </div>
                    </div>

                    <h3 className="delevery">{t("deliveryMethod")}</h3>
                    <div className="delevery-box">
                        <div className="delivery-options">
                            <div className={formData.deliveryMethod === "door" ? "active" : ""} onClick={() => setFormData({ ...formData, deliveryMethod: "door" })}>
                                <h5>{t("door")}</h5>
                                <p>{t("dastavka")}</p>
                            </div>
                            <div className={formData.deliveryMethod === "pickup" ? "active" : ""} onClick={() => setFormData({ ...formData, deliveryMethod: "pickup" })}>
                                <h5>{t("pickup")}</h5>
                                <p> {t("freeDelevery")}</p>
                            </div>
                        </div>
                    </div>

                    {formData.deliveryMethod === "door" && (
                        <div className="input-box">
                            <div className="input-group">
                                <label>{t("intAdress")}</label>
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
                        <button type="button" className={formData.paymentMethod === "online" ? "active" : ""} onClick={() => setFormData({ ...formData, paymentMethod: "online" })}>{t("card")}</button>
                        <button type="button" className={formData.paymentMethod === "cash" ? "active" : ""} onClick={() => setFormData({ ...formData, paymentMethod: "cash" })}>{t("whenGet")}</button>
                        <button type="button" className={formData.paymentMethod === "balance" ? "active" : ""} onClick={() => setFormData({ ...formData, paymentMethod: "balance" })}>{t("paymentFace")}</button>
                    </div>
                    <div className="agreement">
                        <input type="checkbox" />
                        <p>{t("purchaseAgreement")}</p>
                    </div>

                    <div className="back-box">
                        <Button variant="contained" color="primary" onClick={handleOpen} className="checkout-btn">{t("checkout")}</Button>
                        <Link to="/cart"><p>{t("backToCart")}</p></Link>
                    </div>
                </form>

                {/* Modal */}
                <Modal open={open} onClose={handleClose}>
                    <Box sx={{ p: 4, bgcolor: "background.paper", margin: "auto", maxWidth: 400, mt: 10, borderRadius: 2 }}>
                        <h3>{t("yustali")}</h3>
                        <p><strong>{t("phone")}</strong> {formData.phone}</p>
                        <p><strong>{t("fullName")}</strong> {formData.fullName}</p>
                        <p><strong>{t("region")}:</strong> {formData.region}</p>
                        <p><strong>{t("city")}:</strong> {formData.city}</p>
                        <p><strong>{t("deliveryMethod")}:</strong> {formData.deliveryMethod === "door" ? "Доставка до двери" : "Пункт выдачи"}</p>
                        {formData.deliveryMethod === "door" && <p><strong>Адрес:</strong> {formData.address}</p>}
                        <p><strong>{t("paymentMethod")}:</strong> {formData.paymentMethod}</p>
                        <Button variant="contained" color="success" onClick={handleClose}>{t("yustaliikki")}</Button>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default Checkout;
