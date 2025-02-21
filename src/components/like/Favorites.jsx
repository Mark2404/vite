import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../../context";

const Favorites = () => {
    const { wishlist, setWishlist } = useStateValue();

    const toggleFavorite = (product) => {
        setWishlist((prev) => {
            const updatedWishlist = prev.some((item) => item.id === product.id)
                ? prev.filter((item) => item.id !== product.id)
                : [...prev, product];

            sessionStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    return (
        <div className="container">
            <h1>Избранные товары</h1>
            {wishlist.length === 0 ? (
                <p>Вы пока не добавили товары в избранное.</p>
            ) : (
                <ul className="product-list">
                    {wishlist.map((product) => (
                        <li key={product.id}>
                            <div className="product-list__image">
                                <img src={product.thumbnail} alt={product.title} width="100" />
                                <div>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className="icon product-icon favorited"
                                        onClick={() => toggleFavorite(product)}
                                    />
                                </div>
                            </div>
                            <div className="product-list__info">
                                <h2 className="product_name">{product.title}</h2>
                            </div>
                            <div className="product-list__price">
                                <p>{(product.price * 13000).toLocaleString()} so'm</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;
