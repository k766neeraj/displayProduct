
import './index.css';
import Navbar from './components/Navbar';
import ProdBox from './components/ProdBox';
import Footer from './components/Footer';
import './components/js/filtering.js'
import { useState } from 'react';

function App() {
  const [all, setall] = useState('')
  const [price, setprice] = useState('')
  const [category, setcategory] = useState('')
  const [brand, setbrand] = useState('')
  function updateitem(all,brand,category,price){
    if(all!==''){
      setall(all)
    }
    if(price!==''){
      setprice(price)
    }
    if(category!==''){
      setcategory(category)
    }
    if(brand!==''){
      setbrand(brand)
    }
    console.log('Main',brand,price,category)
  }
  return (
    <>
    <Navbar updateitem={updateitem}/>
    <ProdBox itemsPerPage={6} all={all} brand={brand} category={category} price={price}/>
    <Footer/>
    </>
  );
}

export default App;
