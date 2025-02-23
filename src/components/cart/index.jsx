import React from "react";
import { useCart } from "../../context/CartContext.jsx";
import "./index.scss";
import { faPlus, faMinus, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStateValue } from "../../context/index.jsx";
import { Link } from "react-router-dom";



const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const { wishlist, setWishlist } = useStateValue();
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * 13000 * item.quantity), 0);
    const toggleFavorite = (item) => {
        setWishlist((prev) => {
            const updatedWishlist = prev.some((item) => item.id === item.id)
                ? prev.filter((item) => item.id !== item.id)
                : [...prev, item];

            sessionStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };
    return (

        <div className="cart-container">
            <h2>🛒 Корзина</h2>

            {cart.length === 0 ? (
                <p>Ваша корзина пуста.</p>
            ) : (
                <div className="cart-content">
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>

                                <img src={item.images?.[0] || "fallback-image.jpg"} alt={item.title} className="cart-item-img" />

                                <div className="cart-item-info">
                                    <a>{item.title}</a>
                                    <div>
                                        <p>{item.category}</p>
                                    </div>

                                </div>


                                <div className="cart-controls">
                                    <button onClick={() => updateQuantity(item.id, item.name, -1)}>
                                        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.name, 1)}>
                                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>                                    </button>
                                </div>


                                <div className="cart-item-price">
                                    <p className="old-price">
                                        {((item.price * 13000) * 1.1).toLocaleString()} so'm
                                    </p>
                                    <p>{(item.price * 13000).toLocaleString()} so'm</p>
                                </div>

                                <div className="cart-actions">
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id, item.name)}>
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </button>
                                    <button className="favorite-btn">
                                        <FontAwesomeIcon icon={faHeart} onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(item);
                                            alert("Tovar favoritega qoshildi");
                                        }}></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="cart-summary">
                        <div>
                            <p>В корзине {cart.length} товарa</p>
                            <b>  <span>Общая сумма:</span> {totalPrice.toLocaleString()} so'm</b>
                        </div>
                        <div>
                            <Link to="/checkout">
                                <button className="checkout-btn">ОФОРМИТЬ</button>
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
