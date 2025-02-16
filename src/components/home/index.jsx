import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBalanceScale,
    faShoppingCart,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const ProductList = ({ search }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products?limit=100")
            .then((response) => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch(() => {
                setError("xato");
                setLoading(false);
            });
    }, []);

    const filteredProducts = search
        ? products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        )
        : products;

    if (loading) return <CircularProgress className="container" size={50} />;
    if (error) return <p>{error}</p>;
    console.log(filteredProducts);
    return (
        <div className="container">
            <h1 className="product-list__title">Список товаров</h1>
            {filteredProducts.length === 0 ? (
                <p>Ничего не найдено</p>
            ) : (
                <ul className="product-list">
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`} className="product-link">
                                <div className="product-list__image">
                                    <img src={product.thumbnail} alt={product.title} width="100" />
                                    <div>
                                        <FontAwesomeIcon icon={faBalanceScale} className="icon product-icon" />
                                        <FontAwesomeIcon icon={faHeart} className="icon product-icon" />
                                    </div>
                                </div>
                                <div className="product-list__info">
                                    <h2 className="product_name">{product.title}</h2>
                                </div>
                                <div className="fedback">
                                    <Rating name="read-only" className="rating" value={product.rating} readOnly />
                                    <p>{Math.floor(Math.random() * 10) + 1} ta sharh</p>
                                </div>
                                <div className="product-list__price">
                                    <p className="old-price">
                                        {((product.price * 13000) * 1.1).toLocaleString()} so'm
                                    </p>
                                    <p>{(product.price * 13000).toLocaleString()} so'm</p>
                                </div>
                                <div className="credits">
                                    {(((product.price / 12) * 13000).toFixed(0))} so'm x 12 oy
                                </div>
                            </Link>
                            <div className="product-list__btn">
                                <button className="buy">Купить (babi ishlamadi)</button>
                                <button className="cart">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
