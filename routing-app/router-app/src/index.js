import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Image1 from './routing/image1';
import Image2 from './routing/image2';
import Image3 from './routing/image3';
import Home from './routing/home';
import {RouterProvider ,createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path : "/image1",
    element : < Image1 />,
    errorElemnt : <h1>Ooops !!</h1> 
  },
  {
    path : "/image2",
    element : < Image2 />,
    errorElemnt : <h1>Ooops !!</h1> 
  },
  {
    path : "/image3",
    element : < Image3 />,
    errorElemnt : <h1>Ooops !!</h1> 
  },
  {
    path : "/home",
    element : < Home />,
    errorElemnt : <h1>Ooops !!</h1> 
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);


reportWebVitals();
