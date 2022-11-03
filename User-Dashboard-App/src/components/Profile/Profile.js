import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import '../Profile/Profile.css'
const Profile = (props) => {
    const {picture , name , email, phone, location} = props.info;
    // console.log(props.info)
    return (
        <div className='profile'>
            <div className="img-div">
                <img src={picture.large} alt="user-pic" />
            </div>
            <FontAwesomeIcon icon= {faCirclePlus} className='plus-icon' onClick={() => props.addFriend(props.info)}/>
            <div className="user-info">
                <div className="info1">
                <h4> Name : {name.title} {name.first} {name.last}</h4>
                <h4> Address : {location.country} </h4>
                <h4> Salary : {props.salary}$ </h4>
                </div>
                <div className="info2">
                    <h4> Phone : {phone}</h4>
                    <h4> Email : {email}</h4>
                </div>
               
            </div>
        </div>
    );
};

export default Profile;