import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import "./App.css";

import UserPage from "./pages/Admin/UserPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import CreateBlogPage from "./pages/Admin/Blogs/CreateBlogPage";
import UpdateBlogPage from "./pages/Admin/Blogs/UpdateBlogPage";
import CouponPage from "./pages/Admin/Coupons/CouponPage";
import CreateCouponPage from "./pages/Admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./pages/Admin/Coupons/UpdateCouponPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
import UpdateProductPage from "./pages/Admin/Products/UpdateProductPage";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage/>}></Route>
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products/create" element={<CreateProductPage/>}></Route>
        <Route path="blogs/create" element={<CreateBlogPage/>}></Route>
        <Route path="blogs/update/:id" element={<UpdateBlogPage/>}></Route>
        <Route path="coupons" element={<CouponPage/>} />
        <Route path="coupons/create" element={<CreateCouponPage/>} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
