import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Form from './components/Form';
import ElencoPost from './components/ElencoPost';
import Home from './pages/Home';
import DefaultLayout from './pages/DefaultLayout';
import SinglePost from './pages/SinglePost';
import Posts from './pages/Posts';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="posts" element={<Posts />}></Route>
            <Route path="posts/:id" element={<SinglePost />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
