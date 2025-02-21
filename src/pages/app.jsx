import { FavoritesProvider } from "./context/FavoritesContext";
import Home from "./components/home";

function App() {
    return (

        <FavoritesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </FavoritesProvider>

    );
}

export default App;
