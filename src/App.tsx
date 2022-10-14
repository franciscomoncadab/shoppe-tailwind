import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <p className="sm:bg-slate-600 md:bg-green-600 lg:bg-yellow-400 xl:bg-red-600 ">{ window.innerWidth }</p>
      <Footer />
    </div>
  );
}

export default App;
