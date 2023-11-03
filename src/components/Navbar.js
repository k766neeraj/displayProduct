import React from 'react'
import Navbox from './styling/Navbox'
import { Filter } from './styling/Filter'
import FilterBox from './FilterBox'

function Navbar(props) {
    let {updateitem} = props
    return (
        <Navbox>
            <ul class="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <Filter class="filter-buttons">
                <FilterBox updateitem={updateitem}/>
                <span class="material-symbols-outlined">
                    filter_alt
                </span>
            </Filter>
            <div class="search-container">
                <input type="text" id='search-bar' placeholder="Search..." />
                <button class="search-button" type="submit">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </button>
                <span class="material-symbols-outlined hover">
                    account_circle
                </span>
                <span class="material-symbols-outlined hover">
                    shopping_bag
                </span>
            </div>
        </Navbox>
    )
}

export default Navbar
