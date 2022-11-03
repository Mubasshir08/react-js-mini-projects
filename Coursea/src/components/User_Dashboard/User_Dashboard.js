import React from 'react';
import Header from '../Header/Header';
import './User_Dashboard.css';
import { useEffect, useState } from 'react';
import FlashCard from '../FlashCard/FlashCard';
import Data from '../../fakeData/MOCK_DATA.json'
const User_Dashboard = () => {

    const [img , setImg] = useState([]);
    const [data , setData] = useState([]);
    const [course , setCourse] = useState([]);
    const [price , setPrice] = useState([]);
    const [CoursePrice , setCoursePrice] = useState(0);
    
    const userData = Data.slice(0,10);

    useEffect(() => {
      fetch('https://api.unsplash.com/search/photos?query=education&client_id=A0lWposvlGWWWeYjgpqlP_kqjNfO4sX0dSixiA4qfCw')
      .then(response => response.json())
      .then(data => {
        //   let Data = data.results;  
        setImg(data.results)
        setData(userData);
    })
      .catch(err => console.error(err));
    },[]);
    
   
    const addedcourse = (Course) => { 
         setCourse([...course , Course ]);
    }
   
    const addPrice = (Courses) => {
        setPrice([...price,Courses]);
      let totalPrice = price.reduce((price,product) => price + product.price ,Courses.price);
        setCoursePrice(totalPrice)
    }
            console.log(CoursePrice);
    return (
        <div>
            <Header></Header>
            <h3 style={{textAlign:'center', marginBottom: '5%'}}> Courses : {course.length} / ${CoursePrice} </h3>
            <div className="course-div">
            {
                img.map((element , ind) => <FlashCard data = {element} key={data[ind].id} data2 = {data[ind]} addedcourse = {addedcourse} addPrice ={addPrice}></FlashCard>)
            }
            </div>
        </div>
    );
};

export default User_Dashboard;