import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import foto1 from './imagenes/1.jpeg';
import foto2 from './imagenes/2.jpeg';
import foto3 from './imagenes/3.jpeg';
import foto4 from './imagenes/4.jpeg';
import foto5 from './imagenes/5.jpeg';
import foto6 from './imagenes/6.jpeg';
import foto7 from './imagenes/7.jpeg';
import foto8 from './imagenes/8.jpeg';
import foto9 from './imagenes/9.jpeg';
import foto10 from './imagenes/10.jpeg';
import foto11 from './imagenes/11.jpeg';
import foto12 from './imagenes/12.jpeg';
import foto13 from './imagenes/13.jpeg';
import foto14 from './imagenes/14.jpeg';
import foto15 from './imagenes/15.jpeg';
import foto16 from './imagenes/16.jpeg';
import foto17 from './imagenes/17.jpeg';
import foto18 from './imagenes/18.jpeg';
import foto19 from './imagenes/19.jpeg';
import foto20 from './imagenes/20.jpeg';
import foto21 from './imagenes/21.jpeg';
import foto22 from './imagenes/22.jpeg';
import foto23 from './imagenes/23.jpeg';

class App extends Component {
  constructor(props){
    super(props);
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {fullWidth: true, indicators: true});
    });
  }
  render() {
    return (
      <div className="App">
        <div className="carousel carousel-slider center">
          <div className="carousel-item red white-text" href="#one!">
            <h2>McFamilia NC</h2>
            <p className="white-text">Empezamos el repaso...</p>
            <img alt="foto" src={foto1}/>
          </div>
          <div className="carousel-item amber white-text" href="#two!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto2}/>
          </div>
          <div className="carousel-item green white-text" href="#three!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto3}/>
          </div>
          <div className="carousel-item blue white-text" href="#four!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto4}/>
          </div>
          <div className="carousel-item red white-text" href="#five!">
            <h2>McFamilia NC</h2>
            <p className="white-text">Todo el equipo</p>
            <img alt="foto" src={foto5}/>
          </div>
          <div className="carousel-item amber white-text" href="#six!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto6}/>
          </div>
          <div className="carousel-item green white-text" href="#seven!">
            <h2>McFamilia NC</h2>
            <p className="white-text">...Que no falten los abrazos...</p>
            <img alt="foto" src={foto7}/>
          </div>
          <div className="carousel-item blue white-text" href="#eight!">
            <h2>McFamilia NC</h2>
            <p className="white-text">...ni las cervezas con los colegas...</p>
            <img alt="foto" src={foto8}/>
          </div>
          <div className="carousel-item red white-text" href="#nine!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto9}/>
          </div>
          <div className="carousel-item amber white-text" href="#ten!">
            <h2>McFamilia NC</h2>
            <p className="white-text">...a veces dejamos de trabajar pa el postureo...</p>
            <img alt="foto" src={foto10}/>
          </div>
          <div className="carousel-item green white-text" href="#eleven!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto11}/>
          </div>
          <div className="carousel-item blue white-text" href="#twelve!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto12}/>
          </div>
          <div className="carousel-item red white-text" href="#thirteen!">
            <h2>McFamilia NC</h2>
            <p className="white-text">...pero tu siempre serás la reina del McLugar...</p>
            <img alt="foto" src={foto13}/>
          </div>
          <div className="carousel-item amber white-text" href="#fourteen!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto14}/>
          </div>
          <div className="carousel-item green white-text" href="#fiveteen!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto15}/>
          </div>
          <div className="carousel-item blue white-text" href="#sixteen!">
            <h2>McFamilia NC</h2>
            <img alt="foto" src={foto16}/>
          </div>
          <div className="carousel-item red white-text" href="#seventeen!">
            <h2>McFamilia NC</h2>
            <p className="white-text">... y ...</p>
            <img alt="foto" src={foto17}/>
          </div>
          <div className="carousel-item amber white-text" href="#eighteen!">
            <h2>McFamilia NC</h2>
            <p className="white-text">... todos ...</p>
            <img alt="foto" src={foto18}/>
          </div>
          <div className="carousel-item green white-text" href="#nineteen!">
            <h2>McFamilia NC</h2>
            <p className="white-text">... te ...</p>
            <img alt="foto" src={foto19}/>
          </div>
          <div className="carousel-item blue white-text" href="#twenty!">
            <h2>McFamilia NC</h2>
            <p className="white-text">... echaremos ...</p>
            <img alt="foto" src={foto20}/>
          </div>
          <div className="carousel-item red white-text" href="#twentyone!">
            <h2>McFamilia NC</h2>
            <p className="white-text">... de ...</p>
            <img alt="foto" src={foto21}/>
          </div>
          <div className="carousel-item amber white-text" href="#twentytwo!">
            <h2>McFamilia NC</h2>
            <p className="white-text">... MENOS.</p>
            <img alt="foto" src={foto22}/>
          </div>
          <div className="carousel-item green white-text" href="#twentythree!">
            <h2>McFamilia NC</h2>
            <p className="white-text">Y ahora a por nuevos retos. ¡Pero sin olvidarte de NOSOTROS!</p>
            <img alt="foto" src={foto23}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
