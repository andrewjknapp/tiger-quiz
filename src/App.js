import React from 'react';
import './App.css';
import Header from './components/Header';
import QuizDescription from './components/QuizDescription';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <QuizDescription/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
