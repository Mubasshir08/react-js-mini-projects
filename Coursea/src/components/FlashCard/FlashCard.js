import { Button } from 'react-bootstrap';
import React from 'react';
import './FlashCard.css';
const FlashCard = (props) => {
    const{urls}  = props.data ;
    const{price, course_name}  = props.data2 ;        
    // console.log(course_name);  
    return (
        <div className='flashcard'>
            <div className="image">
                <img src={urls.thumb} alt="" />
            </div>
            <div className="descrip">
                <h3> Learn {course_name} </h3>
                <h5> Price: ${price} </h5>
            </div>
            <div className="d-grid">
                <Button variant="outline-primary" onClick={() =>  {props.addedcourse(props.data); props.addPrice(props.data2)}}>
                    Buy Now
                </Button>
            </div>
        </div>
    );
};

export default FlashCard;