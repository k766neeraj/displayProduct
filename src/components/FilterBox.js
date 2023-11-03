import React from 'react'
import { Box } from './styling/Filter'

function FilterBox(props) {
    let {updateitem} = props
    
    const handlesubmit = ()=>{
        console.log("Filtered")
      
        let all = document.getElementById('all').value
        let price =document.getElementById('price-filter').value
        let category =document.getElementById('category-filter').value
        let brand =document.getElementById('brand-filter').value
        updateitem(all,brand,category,price)
        console.log('Data',price,category,brand)
        
    }
    return (
        <>
            <Box id='box'>
                <div class="filterclick">
                    <button class="btn filter-button" id='all' data-filter="all">All</button>
                    <select class="btn price-dropdown" id="price-filter">
                        <option value="All Prices">All Prices</option>
                        <option value="&gt;1000">&gt;1000</option>
                        <option value="&gt;5000">&gt;5000</option>
                        <option value="&gt;10000">&gt;10000</option>
                    </select>
                    <select class="btn category-dropdown" id="category-filter">
                        <option value="All Category">All Category</option>
                        <option value="SmartPhone">SmartPhone</option>
                        <option value="SmartWatch">SmartWatch</option>
                        <option value="Tablet">Tablet</option>
                    </select>
                    <select class="btn brand-dropdown" id="brand-filter">
                        <option value="All Brands">All Brands</option>
                        <option value="samsung">samsung</option>
                        <option value="iphone">iphone</option>
                        <option value="Motorola">Motorola</option>
                    </select>
                </div>
                <div className="filtersubm" onClick={handlesubmit}>Filter</div>
            </Box>
            <div className='FilterTop' id='topfilter'>
                Filter
            </div>
        </>
    )
}

export default FilterBox
