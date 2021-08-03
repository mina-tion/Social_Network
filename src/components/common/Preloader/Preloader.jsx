import preloader from "../../../assets/images/Dual Ball-1.5s-200px.svg";
import React from "react";


const Preloader = (props) => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;