import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
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
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products?limit=100")
            .then((response) => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch(() => {
                setError("Ошибка загрузки данных");
                setLoading(false);
            });
    }, []);

    let filteredProducts = search
        ? products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        )
        : products;

    if (sortBy === "priceAsc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceDesc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "alphabetical") {
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (loading) return <CircularProgress className="container" size={50} />;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{
                    width: "98%",
                    padding: "15px",
                    borderRadius: "10px",
                }}
            >
                {loading
                    ? [...Array(6)].map((_, index) => (
                        <SwiperSlide key={index}>Loading...</SwiperSlide>
                    ))
                    : filteredProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Link to={`/products/${product.id}`} className="product-link">
                                <div className="product-list__image">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        width="100%"
                                    />
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faBalanceScale}
                                            className="icon product-icon"
                                        />
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className="icon product-icon"
                                        />
                                    </div>
                                </div>
                                <div className="product-list__info">
                                    <h2 className="product_name">{product.title}</h2>
                                </div>
                                <div className="fedback">
                                    <Rating
                                        name="read-only"
                                        className="rating"
                                        value={product.rating}
                                        readOnly
                                    />
                                    <p>{Math.floor(Math.random() * 10) + 1} отзывов</p>
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
                        </SwiperSlide>
                    ))}
            </Swiper>

            <div className="container">
                <h1 className="product-list__title">Список товаров</h1>

                <div className="filters">
                    <label className="filter-label">
                        <p>Filtir</p>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="">Hammmasi</option>
                            <option value="priceAsc">narx pasi</option>
                            <option value="priceDesc">narx kottasi</option>
                            <option value="alphabetical">alfavit boyicha</option>
                        </select>
                    </label>
                </div>
                {filteredProducts.length === 0 ? (
                    <p>Ничего не найдено</p>
                ) : (
                    <ul className="product-list">
                        {filteredProducts.map((product) => (
                            <li key={product.id}>
                                <Link to={`/products/${product.id}`} className="product-link">
                                    <div className="product-list__image">
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            width="100"
                                        />
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faBalanceScale}
                                                className="icon product-icon"
                                            />
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                className="icon product-icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="product-list__info">
                                        <h2 className="product_name">{product.title}</h2>
                                    </div>
                                    <div className="fedback">
                                        <Rating
                                            name="read-only"
                                            className="rating"
                                            value={product.rating}
                                            readOnly
                                        />
                                        <p>{Math.floor(Math.random() * 10) + 1} отзывов</p>
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
                                    <button className="buy">Купить</button>
                                    <button className="cart">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default ProductList;
