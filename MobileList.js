//Program to generate Mobile Product List

import React, { useState } from "react";
import './MobileList.css';


function MobileList(){

const product=[
    {   id:1,
        name:'Motorola G84',
        description:'256 GB Storage',
        price: 19129,
        rating:3,
        instock:'Yes'
    },
    {
        id:2,
        name:'Samsung Galaxy',
        description:'8 GB Memory',
        price: 24999,
        rating:4,
        instock:'Yes'
    },
    {
        id:3,
        name:'Redme Note 13',
        description:'8 GB + 256 GB, Arctic White',
        price: 18999,
        rating:5,
        instock:'No'
    }
    ];


    return (
    <div>
         <table>
            <thead>
           <tr>
             <th>Name</th>
             <th>Description</th>
             <th>Price</th>
             <th>Rating</th>
             <th>InStock</th>
         </tr>
         </thead>
         <tbody>
            {
            product.map((prod,index)=>(
                
                <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.description}</td>
                <td>{prod.price}</td>
                <td>{prod.rating}</td>
                <td>{prod.instock}</td>
                </tr>
            )
            )
        }
         </tbody>
        
         </table>
         </div>
     );
}

export default MobileList;