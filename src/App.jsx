import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import About from "./components/About"
import CoreStrengths from "./components/CoreStrengths"
import ContactCard from './components/ContactCard'
import DownloadCV from './components/DownloadCV'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import VoteOfThanks from './components/VoteOfThanks'

function App(props){
  return(
    <>
      <Header/>
      <About/>
      <CoreStrengths/>
      <div className='contactCV'>
      <ContactCard/>
      <div>
      <DownloadCV/>
      <Footer/>
      </div>
      </div>
      <BackToTop/>
      <VoteOfThanks/>
    </>
  );
}

export default App