import React from "react";

const style ={
    background:'rgb(201, 76, 76)',
    border: '3px solid white',
    fontSize :'50px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none' ,
    color: "white"
};

const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>

);


export default Square;