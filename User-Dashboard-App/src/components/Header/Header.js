import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../Header/Header.css'
const Header = (props) => {
    const amount= props.amount;
    //  console.log(props.amount)
    let totalPrice = 0;

  for(let i = 0; i < amount.length; i++){
    totalPrice = totalPrice + (amount[i].dob.age) *10;
    // console.log(amount[i].dob.age);
  }
    return (
        <nav className='navbar'>
        <div>
             <ul>
                <a href="/user">User</a>
                <a href="/friends">Friends</a>
                <a href="/log-out">Log Out</a>
             </ul>
        </div>
      <div className="icon">
                <FontAwesomeIcon icon= {faUser}/>
      <span>{props.friendsAmount}</span>
      <h4>Amount : {totalPrice}$</h4>
      </div>  
    </nav>
    );
};

export default Header;