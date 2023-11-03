import React from 'react'
import { Items } from './styling/Items'
import { Subtitle } from './styling/Title'

function ViewItems(props) {
    const { item } = props
    const handlecart =()=>{
        
    }
    return (
        <Items className="col-container">
            <div className='card'>
                <div className="card-body">
                    <div className='Item'>
                        <div className="image">
                            <img src={item.image === '' ? 'https://static.wikia.nocookie.net/otonari-no-tenshi/images/c/c9/No_images_available.jpg/revision/latest?cb=20220104141308' : item.image} alt={item.title} width={400} height={250} />
                        </div>

                        <Subtitle className="card-title">{item.title}</Subtitle>
                        <p className="card-text">{item.description}</p>
                        <p className="card-link">
                            <div className="price">
                                <span class="material-symbols-outlined">
                                    currency_rupee
                                </span>
                                <div className="amount">
                                    {item.price}
                                </div>
                            </div>
                            <div className="rating">
                                <span class="material-symbols-outlined">
                                    star_rate
                                </span>
                                <div className="rate">
                                    {item.rating.rate}
                                </div>
                            </div>
                            <div className='cart'>
                                <span class="material-symbols-outlined">
                                    shopping_bag
                                </span>
                                <div className="addcart" onClick={handlecart}>Add Cart</div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </Items >
    )
}

export default ViewItems
