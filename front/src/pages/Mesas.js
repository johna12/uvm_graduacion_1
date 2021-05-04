import React from "react";
import "./Mesas.css";
import Map from "../components/Map/Map";

const Reservaciones = () =>
{
    return(
        <div className="container-res">
            <h1>Mesas</h1>
            <Map/>
        </div>
    )
};

export default Reservaciones;