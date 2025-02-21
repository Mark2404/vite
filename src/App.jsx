import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Prouduct from "./components/prouduct";
import Favorites from "./components/like/Favorites";

function App() {
    const [search, setSearch] = useState("");

    return (
        <>
            <Header setSearch={setSearch} />
            <Routes>

                <Route path="/" element={<Home search={search} />} />
                <Route path="/products/:id" element={<Prouduct />} />

                {/* <Route path="/favorites" element={<Like />} /> */}
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
