import React from "react";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProducts from "./pages/CompareProducts";
import FavouriteProducts from "./pages/FavouriteProducts";
import LoginPage from "./pages/LoginPage";
import ForgotPass from "./pages/ForgotPass";
import SignUp from "./pages/SignUp";
import ResetPass from "./pages/ResetPass";
import SingleBlog from "./pages/SingleBlog";
import Privacypolicy from "./pages/Privacypolicy";
import Refundpolicy from "./pages/Refundpolicy";
import TermsandCondtion from "./pages/TermsandCondtion";
import Shippingpolicy from "./pages/Shippingpolicy";
import Faq from "./pages/Faq";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
export default function App() {
  const routerprovider = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "our-store",
          element: <OurStore />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "compare-products",
          element: <CompareProducts />,
        },
        {
          path: "faourite-products",
          element: <FavouriteProducts />,
        },
        {
          path: "login-page",
          element: <LoginPage />,
        },
        {
          path: "forgot-pass",
          element: <ForgotPass />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "reset-pass",
          element: <ResetPass />,
        },
        {
          path: "blog/:id",
          element: <SingleBlog />,
        },
        {
          path: "privacy-policy",
          element: <Privacypolicy />,
        },
        {
          path: "refund-policy",
          element: <Refundpolicy />,
        },
        {
          path: "terms&conditions",
          element: <TermsandCondtion />,
        },
        {
          path: "shipping-policy",
          element: <Shippingpolicy />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
        {
          path: "product/:id",
          element: <ProductPage />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout/>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routerprovider} />
    </>
  );
}
