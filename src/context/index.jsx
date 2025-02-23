import { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const storedWishlist = sessionStorage.getItem("wishlist");
    const [wishlist, setWishlist] = useState(storedWishlist ? JSON.parse(storedWishlist) : []);


    useEffect(() => {
        sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    return (
        <StateContext.Provider value={{ wishlist, setWishlist }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);