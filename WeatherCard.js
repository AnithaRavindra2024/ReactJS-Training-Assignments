import React, { useState } from "react";

function WeatherCard(props){
console.log(props.day);

return (
            <body className="body">
            
                {
                 
                 <div className="card" key={props.key}>
                  <p className="Day" >{props.day}</p>
                  <p className="Condition" >{props.condition}</p>
                  <p className="Temperature" >{props.temperature}</p>
                                  </div>
                  
   
                }
            
            </body>
            );

}

export default WeatherCard;