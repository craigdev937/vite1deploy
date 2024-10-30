import React from "react";
import "./App.css";
import Volcano from "/Volcano1.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <h1>Volcano</h1>
            <img 
                src={Volcano} alt="Volcano" 
                height={"600px"} width={"auto"}
            />
        </React.Fragment>
    );
};


