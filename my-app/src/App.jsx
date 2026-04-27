import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import MovieForm from './components/MovieForm';
import AppInfo from './pages/AppInfo';
import AuthorInfo from './pages/AuthorInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/add" element={<MovieForm />} />
            <Route path="/movies/edit/:id" element={<MovieForm />} />
            <Route path="/about" element={<About />}>
              <Route path="app" element={<AppInfo />} />
              <Route path="author" element={<AuthorInfo />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;