
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews , setReviews] = useState([]);
    useEffect( ()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data =>setReviews(data))
    } , [])
    return (
        <div id='reviews' className='container'>
        <h1 className='text-center text-primary my-5'>  Patients Reviews </h1>
      <div className="services">
      {
        reviews.map( review => <Review
        key={review.id}
        review={review}
        ></Review>)
       }
      </div>
        </div>
    );
};

export default Reviews;