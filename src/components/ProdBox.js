import React, { useState } from 'react'
import { MainBox } from './styling/MainBox'
import { H1 } from './styling/Title'
import ViewItems from './ViewItems'
import ReactPaginate from 'react-paginate';
import techdata from './Data/prod';
function ItemBox({ currentItems,all,category,price,brand}) {


  return (
    <MainBox>
      <H1 className='addreview'>Electronic Products</H1>
      <div className="row-container">
        <div className="container">
          {currentItems.length === 0 && "No Task To Display"}
        </div>
        {currentItems.map((item) => {
        
          
          return <ViewItems key={item._id} item={item} />
         
        })
        }


      </div>
    </MainBox>
  )
}

export default function ProdBox({ itemsPerPage, all, brand, category, price }) {

  const [itemOffset, setItemOffset] = useState(0);
  let arr=[]
  for (let index = 0; index < techdata.length; index++) {
    const element = techdata[index];
    if(category==='All Category' && brand==='All Brands' && price==='All Prices'){
      arr.unshift(element)
    }
    if((category!='' && element.category==category) && (brand!='' && element.brand===brand)){
      console.log('sadas',element)
      arr.unshift(element)
    } 
  }
  console.log('dsds',arr,arr.length)
  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = arr.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(arr.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % arr.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ItemBox currentItems={currentItems} all={all} category={category} price={price} brand={brand}/>
      <ReactPaginate
        className='paging'
        breakLabel="..."
        nextLabel="Next"
        pageClassName='pagingtag'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}