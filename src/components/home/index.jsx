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
import { Button, Modal } from "antd";
import { faBalanceScale, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { useStateValue } from "../../context/index.jsx";


const ProductList = ({ search }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { wishlist, setWishlist } = useStateValue();
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
    const toggleFavorite = (product) => {
        setWishlist((prev) => {
            const updatedWishlist = prev.some((item) => item.id === product.id)
                ? prev.filter((item) => item.id !== product.id)
                : [...prev, product];

            sessionStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

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

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };


    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                navigation={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{
                    width: "98%",
                    padding: "15px",
                    borderRadius: "10px",
                }}
            >
                {filteredProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="product-card" onClick={() => openModal(product)}>
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
                        </div>
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
                <ul className="product-list">
                    {filteredProducts.map((product) => (
                        <li key={product.id} onClick={() => openModal(product)}>
                            <div className="product-list__image">
                                <img src={product.thumbnail} alt={product.title} width="100" />
                                <div>
                                    <FontAwesomeIcon
                                        icon={faBalanceScale}
                                        className="icon product-icon"
                                    />
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className="icon product-icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(product);
                                        }}
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
                        </li>
                    ))}
                </ul>
            </div>
            <Modal
                title={selectedProduct?.title}
                open={modalVisible}
                onCancel={closeModal}
                footer={[
                    <Button key="back" onClick={closeModal}>
                        Закрыть
                    </Button>,
                    <Link to={`/products/${selectedProduct?.id}`} key="details">
                        <Button type="primary">Подробнее</Button>
                    </Link>,
                ]}
            >
                <img
                    src={selectedProduct?.thumbnail}
                    alt={selectedProduct?.title}
                    style={{ width: "100%", marginBottom: "10px" }}
                />
                <p>{selectedProduct?.description}</p>
            </Modal>
        </>
    );
};

export default ProductList;
