import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import CategoryPage from "../Pages/category/CategoryPage";
import Search from "../Pages/search/Search";
import ShopPage from "../Pages/shop/ShopPage";
import SingleProduct from '../Pages/shop/productdetais/SingleProduct';
import Login from "../components/Login";
import Register from '../components/Register';
import PaymentSuccess from '../components/PaymentSuccess';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/categories/:categoryName', element: <CategoryPage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/search', element: <Search /> },
      { path: '/shop/:id', element: <SingleProduct /> },
      {
        path: "/success",
        element: <PaymentSuccess />


      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

export default router;
