import { React } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido</h1>
      <iframe
        width="70%"
        height="50%"
        src="https://www.youtube.com/embed/ycW-iaAfYHI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h2>Es un breve video para nuestros graduados</h2>
    </div>
  );
};

export default Home;
