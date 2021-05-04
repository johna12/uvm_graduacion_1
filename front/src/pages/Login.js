import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login(props) {
  const [registerNombres, setRegisterNombres] = useState("");
  const [registerApellidos, setRegisterApellidos] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const [image, setImagen] = useState(null);

  const register = () => {
    axios({
      method: "POST",
      data: {
        nombres: registerNombres,
        apellidos: registerApellidos,
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      if (res.status !== 404) //console.log(res);
        props.getUser(true);
      else console.log("hola");
    });
  };
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      //setData(res.data);
      const { username } = res.data;
      setData(username);
    });
  };

  const logout = () => {
    axios({
      method: "DELETE",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    }).then((res) => {
      console.log(res);
    });
  };

  const imagen = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/peliculas/1",
    }).then((res) => {
      const { Imagen } = res.data;
      console.log(Imagen);
      const base64String = btoa(
        String.fromCharCode(...new Uint8Array(Imagen.data))
      );
      setImagen(base64String);
    });
  };

  return (
    <div className="cont">
      <div className="tabs">
        <input type="radio" name="tabs" id="tabone" checked="checked" />
        <label for="tabone">Login</label>
        <div className="tab">
          <h1>Iniciar sesion</h1>
          <div className="form">
          <input
            placeholder="Numero de cuenta"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input type="password"
            placeholder="Contraseña"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          </div>
          <button onClick={login} type="button" class="btn btn-danger">Enviar</button>
        </div>

        <input type="radio" name="tabs" id="tabtwo" />
        <label for="tabtwo">Registro</label>
        <div className="tab">
          <h1>Registro</h1>
          <div className="form">
          <input
            placeholder="Nombre"
            onChange={(e) => setRegisterNombres(e.target.value)}
          />
          <input
            placeholder="Apellido"
            onChange={(e) => setRegisterApellidos(e.target.value)}
          />
          <input
            placeholder="Numero de cuenta"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            placeholder="Contraseña"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          </div>
          <button onClick={register} type="button" class="btn btn-danger">Enviar</button>
        </div>
        <input type="radio" name="tabs" id="tabthree" />
      </div>
    </div>
  );
}

export default Login;

/*

  <div className="register">
          <h1>Register</h1>
          <input
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={register}>Submit</button>
        </div>
        <div className="login">
          <h1>Login</h1>
          <input
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={login}>Submit</button>
        </div>
        <div>
          <h1>Get user</h1>
          <button onClick={getUser}>Usuario</button>
          {data ? <h1>Bienvenido {data}</h1> : null}
        </div>
        <div>
          <button onClick={logout}>log out</button>
        </div>
  
        <button onClick={imagen}>Imagen</button>
        <img src={`data:image/jpeg;base64,${image}`} alt=""/>

  */
