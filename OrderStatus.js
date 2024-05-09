//Using the `useState` hook to manage object states

import { useState } from "react";

function OrderStatus() {
    let [order, setOrder] = useState({
        id: 'Ord135',
        status: 'Processing',
        customer: 'Anitha R',
        items: 5
    });

    //Call for dropdown and population
    
    
        function updateOrderDetails(){
            var myOrderlist = document.getElementById("myOrderList");
            let OrderDetails= myOrderlist.options[myOrderlist.selectedIndex].text;
            console.log(OrderDetails);
            setOrder({...order,status:OrderDetails})
        }
   
         //picklist selection 
         
        return (
            <div>
                <h1>Current Order :  {order.id}</h1>
                <h1>Current Status : {order.status}</h1>
                <h1>Customer Name : {order.customer}</h1>
                <h1>Ordered Items : {order.items}</h1>
                <b> Select the status from the dropwonlist </b>  
         <select id = "myOrderList" onChange = {updateOrderDetails} >  
         <option> ---Choose Status--- </option>  
         <option> Processing </option>  
         <option> Shipped </option>  
         <option> Delivered </option>  
         </select>
            </div>
        );

 

   
}

export default OrderStatus;