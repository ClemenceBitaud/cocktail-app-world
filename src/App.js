import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Cocktail from "./pages/Cocktail";
import Favorite from "./pages/Favorite";
import Random from "./pages/Random";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/cocktail",
    element: <Cocktail/>
  },
  {
    path: "/cocktail/:search",
    element: <Cocktail/>
  },
  {
    path: "/favorite",
    element: <Favorite/>
  },
  {
    path: "/random",
    element: <Random/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
