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

import DashboardLayout from '../Pages/dashboard/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import OrderDetails from '../Pages/dashboard/users/OrderDetails';
import UserOrders from '../Pages/dashboard/users/UserOrders';
import UserPayments from '../Pages/dashboard/users/UserPayments' ;
import UserDMain from '../Pages/dashboard/users/dashboard/UserDMain';
import UserProfile from '../Pages/dashboard/users/UserProfile';
import UserReviews from '../Pages/dashboard/users/UserReviews';

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
      {
        path: "/orders/:orderId",
        element: <OrderDetails />
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      // User routes
      { path: '', element: <UserDMain/> },
      { path: 'orders', element: <UserOrders /> },
      { path: 'payments', element: <UserPayments /> },
      {path: 'profile', element:  <UserProfile/>},
      { path: 'reviews', element: <UserReviews/> },

      // Admin routes (only accessible by admins)
      {
        path: 'admin',
        element: <PrivateRoute role="admin"> AdminDMain</PrivateRoute>,
      },
      {
        path: 'add-new-post',
        element: <PrivateRoute role="admin">AddProduct</PrivateRoute>,
      },
      {
        path: 'manage-products',
        element: <PrivateRoute role="admin">ManageProducts</PrivateRoute>,
      },
      {
        path: 'update-product/:id',
        element: <PrivateRoute role="admin">UpdateProduct </PrivateRoute>,
      },
      {
        path: 'users',
        element: <PrivateRoute role="admin">ManageUser</PrivateRoute>,
      },
      {
        path: 'manage-orders',
        element: <PrivateRoute role="admin"> ManageOrders</PrivateRoute>,
      }
    ],
  },
]);

export default router;
