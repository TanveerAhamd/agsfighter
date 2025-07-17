import React from 'react'
import Hero from './components/hero/Hero';
import ScrollingPortion from "./components/scrrolingPortion/ScrollingPortion";
import BooksDesign from './components/booksDesign/BooksDesign';
import Carousel from './components/carousel/Carousel';
import Carousels from './components/carousel2/Carousels';

const App = () => {
  return (
    <div>
      <Hero/>
      
     <Carousel/>

     <BooksDesign/>
<Carousels/>
     <ScrollingPortion/>
     
    </div>
  )
}

export default App