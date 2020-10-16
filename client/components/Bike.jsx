import React from 'react';

const Bike = (props) => (
    <div className='bike'>
        <img src={props.bike.imageUrl} className='bikeImg' onClick={props.chooseBike(props.bike.id)}/> 
        <h4>{props.bike.model}</h4>
        <span>Price per day: {props.bike.price}</span>
    </div>
)
export default Bike;