import React from "react";

import Square from './Square';

const style ={
    border: '2px solid red',
    borderRadius: '8px',
    width: '400px',
    height: '400px',
    marginTop: '100px',
    marginLeft: '350px',
    marginRight: '500px',
    display: 'grid',
    gridTemplate: 'repeat(3,1fr)/ repeat(3,1fr)'
}
const Board =({squares,onClick}) =>(
    
         <div style={style}>
             {squares.map((square,i)=>(
                 <Square key={i} value={square} onClick={()=> onClick(i)}/>
             )
             )}
           
            </div>
    )


export default Board;