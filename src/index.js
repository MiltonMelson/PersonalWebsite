import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './components/Page';
import NavBar from './components/Header';
import Footer from './components/Footer';
import SlideShow from './components/SlideShow';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
   <div>
      <NavBar />
      <Page />
      <SlideShow />
      <Footer />
   </div>
);