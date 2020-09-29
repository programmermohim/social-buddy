import React from 'react';
import './UpperHeader.css'
import logo from './image/profile2.png'

const UpperHeader = () => {
    return (
        <div className ="header">
          <img src={logo} alt=""/>
          <h1>Rifat Alam Mohim</h1>
        </div>
    );
};

export default UpperHeader;