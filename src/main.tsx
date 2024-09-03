import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Component/Layout.tsx';
import Home from './Pages/Home/Home.tsx';
import Userid from './Pages/Userid.tsx';
import Contact from './Pages/Contact/Contact.tsx';
import About from './Component/About/About.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> {/* This is the parent path */}
      <Route index element={<Home />} /> {/* Corrected child path */}
      <Route path='contact/' element={<Contact />} /> {/* Corrected child path */}
      <Route path='About/' element={<About />} /> {/* Corrected child path */}
      <Route path='user/:userid' element={<Userid />} />
    </Route>
  )
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
