import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import React from 'react'
import PageNavbar from './Components/PageNavbar/PageNavbar';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Results from './Components/Results/Results';
import Shop from './Components/Shop/Shop'
import Articles from './Components/Articles/Articles';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <>
      <PageNavbar />
      <Header />
      <Intro />
      <Results />
      <Shop />
      <Articles/>
      <Footer/>
    </>
  );
}
