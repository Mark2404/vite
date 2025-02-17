import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import "./index.scss";

const index = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <div className="product-text-info">
                <div>
                    <h1>{product.title}</h1>
                    <div className="fedback">
                        <Rating name="read-only" className="rating" value={product.rating} readOnly />
                        <p>{Math.floor(Math.random() * 10) + 1} ta sharh</p>
                        <FontAwesomeIcon icon="fa-solid fa-share-nodes" style={{ color: "#74C0FC", }} /><p className="share"> ulashih</p>
                    </div>
                </div>
                <h2>{(product.price * 13000).toLocaleString()} so'm</h2>
            </div>





        </div>
    );
};

export default index;
