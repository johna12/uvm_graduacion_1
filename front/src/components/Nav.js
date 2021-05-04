import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Nav.css"

const Nav = () =>{

    const links = [
        {
            title: "Inicio",
            path: "/"
        },
        {
            title: "Reservaciones",
            path: "/mesa-y-lugares"
        },
        {
            title: "Lista de Asistentes",
            path: "/lista-de-graduados"
        },
        {
            title: "Calendario de Actividades",
            path: "/calendario"
        },  
        {
            title: "Acerca de",
            path: "/about"
        }
    ]

    const logout = () => {
        axios({
          method: "DELETE",
          withCredentials: true,
          url: "http://localhost:4000/logout",
        }).then((res) => {
          console.log(res);
        });
        window.location.reload(false);
    };

    return(
        <div className="Navigation">
            <div className="logo">UNIVERSIDAD DEL VALLE DE MEXICO</div>
            <ul>
                {links.map((route, index) => (
                    <li key={index}>
                        <Link className="link" to={route.path}>
                                {route.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={logout} type="button" class="btn btn-light">Cerrar sesion</button>
        </div>
    )
};

export default Nav;