import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Catalog from "./pages/Catalog";

import { ProductsProvider } from "./context/ProductsContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { PublicUserProvider } from "./context/PublicUserContext";

function App() {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <PublicUserProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="profile" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </PublicUserProvider>
      </ProductsProvider>
    </CategoriesProvider>
  );
}

export default App;
