import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(storedCart);

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id && item.name === product.name
            );

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id && item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id, name) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id || item.name !== name));
    };

    const updateQuantity = (id, name, amount) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.name === name
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
