import { React } from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className="h1">Contacto</h1>
      <p></p>
      <div>
      <table border="5" width="700">
        <tr>
          <th colSpan="2" className="td">INFORMACION</th>
        </tr>
        <tr>
          <td>NOMBRE:</td>
          <td><input name="nombre"></input></td>
        </tr>
        <tr>
          <td>MATRICULA:</td>
          <td><input></input></td>
        </tr>
        <tr>
          <td>CORREO:</td>
          <td><input></input></td>
        </tr>
        <tr>
          <td>DESCRIPCION DEL PROBLEMA</td>
          <td><textarea rows="5" cols="20"></textarea></td>
        </tr>
        <tr>
          <td></td>
          <td>
          <button className="boton_personalizado" type="submit" >Enviar</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
    
  );
};

export default About;
