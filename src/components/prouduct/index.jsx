import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import "./index.scss";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

const index = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [IsStock, setIsStock] = useState(false);
    console.log(product);


    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("xato");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <CircularProgress className="container" size={50} />;
    if (error) return <p>{error}</p>;

    return (

        <div className="container product-full">
            <div className="product-imgs">

                <div className="side-bar-img-box">
                    <div className="side-img">
                        <img src={product.images[0]} alt={product.title} width="300" />
                    </div>
                    <div className="side-img">
                        <img src={product.images[0]} alt={product.title} width="300" />
                    </div>
                    <div className="side-img">
                        <img src={product.images[0]} alt={product.title} width="300" />
                    </div>
                </div>
                <div className="img-box">
                    <img src={product.thumbnail} alt={product.title} width="300" />
                </div>
            </div>
            <div className="product-text-info">
                <h1>{product.title}</h1>
                <div className="product-rating">
                    <div>
                        <Rating name="read-only" value={product.rating} readOnly></Rating>
                        <p>{Math.floor(Math.random() * 10) + 1} отзывов</p>
                    </div>
                    <p className="share">Поделиться</p>
                </div>
                <div className="old-price-box">
                    <p className="old-price">
                        {((product.price * 13000) * 1.1).toLocaleString()} so'm
                    </p>
                    <p>{(product.price * 13000).toLocaleString()} so'm</p>
                </div>
                <div className="brend">
                    <p>brend: <span >_____</span> <span className="brend-name">{product.category}</span> </p>
                </div>
                <div className="brend">
                    <p>Model <span>_____</span> <span className="category-col">{product.category}</span> </p>
                </div>
                <div className="brend">
                    <p>Is stock <span>_____</span> <span className="isstock">{product.availabilityStatus}</span> </p>
                </div>
            </div>






        </div>
    );
};

export default index;
