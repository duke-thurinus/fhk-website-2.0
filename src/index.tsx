import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Componets/header';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import About from './Pages/about';
import FAQ from './Pages/faq';
import Home from './Pages/home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },{
        path: "/home",
        element: <Home/>
    },{
        path: "/about",
        element: <About/>
    },{
        path: "/faq",
        element: <FAQ/>
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
