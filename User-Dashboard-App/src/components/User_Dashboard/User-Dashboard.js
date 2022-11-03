import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import '../User_Dashboard/User-Dashboard.css'
const UserDashboard = () => {
    const [userData , setUserData] = useState([]);
    const [loading , setLoading] = useState(true);
    // const   [amount , setAmount] = useState(0);
    const [friends , setFriends] = useState ([]);

    const addFriend = (newFriends) => {
        const friendsArray = [...friends , newFriends]
        setFriends(friendsArray);
    }

    useEffect( () => {
        const fetchData = async () => { 
        const response = await fetch ('https://randomuser.me/api/?results=15');
        const data = await response.json();
        setUserData(data);
        setLoading(false);
    };
        fetchData().catch(console.error);
    } ,[]);
            if(loading) return <h1>loading</h1>;
            const manData = userData.results;
            
    return (
        <section>
                <Header  friendsAmount = {friends.length} amount = {friends}></Header>
            <div className="user-container">
                {
                    manData.map(pd => {
                     let userSalary = (pd.dob.age)*10;
                    //  userSalary = ((pd.dob.age)*Math.random()*10).toFixed(3);
                        return (
                            <Profile 
                                addFriend = {addFriend}
                                info = {pd}
                                key = {Math.random()*10}
                                salary = {userSalary}
                            ></Profile>
                        );
                    })
                }
            </div>
            <div className="count-desk">
                   
            </div>
        </section>
    );
};

export default UserDashboard;