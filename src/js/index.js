//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import PropTypes from "prop-types";

//import your own components
var SimpleTimer = (props) =>{
    return(
        <div className ="d-flex bg-white text-white py-3 justify-content-center">
            <div className = "clock">
             <i className ="far fa-clock"></i>
            </div>
            <div className="numbers">{props.placeSix % 50}</div>
            <div className="numbers">{props.placeFive % 50}</div>
            <div className="numbers">{props.placeFour % 50}</div>
            <div className="numbers">{props.placeThree % 50}</div>
            <div className="numbers">{props.placeTwo % 50}</div>
            <div className="numbers">{props.placeOne % 50}</div>
        </div>
        
    )
}

let timer = 0;
setInterval(function(){
    const six = Math.floor(timer/100000);
    const five = Math.floor(timer/10000);
    const four = Math.floor(timer/1000);
    const three = Math.floor(timer/100);
    const two = Math.floor(timer/10);
    const one = Math.floor(timer/1);
    timer++;


//render your react application
ReactDOM.render(<SimpleTimer placeOne={one} placeTwo={two} placeThree={three} placeFour={four} placeFive={five} placeSix={six} />, document.querySelector("#app")
);
},1000);