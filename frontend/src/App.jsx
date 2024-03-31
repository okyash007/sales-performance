import { useState } from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/products/Products";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Body from "./Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
