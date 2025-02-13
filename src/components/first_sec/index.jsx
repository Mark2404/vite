import React, { useState, useEffect } from 'react';
import "./index.scss";
function Index() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [sortAZ, setSortAZ] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    const filteredProducts = products
        .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sortAZ ? a.title.localeCompare(b.title) : 0);

    return (
        <div className="min-h-screen bg-black text-white p-4">
            <header className="flex justify-between items-center mb-6">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="p-2 text-black rounded-lg w-full max-w-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    onClick={() => setSortAZ(!sortAZ)}
                    className="ml-4 p-2 bg-red-600 hover:bg-red-800 rounded-lg">
                    {sortAZ ? 'Sort Z-A' : 'Sort A-Z'}
                </button>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-red-500">
                        <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded-md mb-3" />
                        <h2 className="text-lg font-bold text-red-500">{product.title}</h2>
                        <p className="text-sm">${product.price}</p>
                        <p className="text-yellow-400">⭐ {product.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;
