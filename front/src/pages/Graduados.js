import React, { useEffect, useState } from "react";
import axios from "axios";

const Graduados = () =>
{

    const [ reservacion, setReservacion ] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/reservaciones/`).then((res) => {
        const reserv = res.data;
        setReservacion(reserv);
        console.log(reserv);
    });
    }, [])

    return(
        <div>
            <h1>Lista de Graduados</h1>
            <div className="card" style={{width: "18rem"}}>
            
                {reservacion.map((item, i) => (
                <ul className="list-group list-group-horizontal"> 
                    <li className="list-group-item">ID: {item.ID_usuario}</li>
                    <li className="list-group-item">Nombre: {item.Nombres}</li>
                    <li className="list-group-item">Apellido: {item.Apellidos}</li>
                    <li className="list-group-item">Usuario: {item.Username}</li> 
                    </ul>
                ))}
            
            </div>
        </div>
    )
};

export default Graduados;