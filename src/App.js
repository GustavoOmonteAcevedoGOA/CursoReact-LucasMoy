import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');  
  const [imagen,setImagen] = useState('');  
  const onChangeLinea1= function(evento){
    
    /* el set modifica el valor de linea1 */
    /* el set renderiza todo el componente /App/*/
    setLinea1(evento.target.value);
  };
  const onChangeLinea2= function(evento){
    
    /* el set modifica el valor de linea1 */
    /* el set renderiza todo el componente /App/*/
    setLinea2(evento.target.value);
  };

  const onChangeImagen = function (evento){
   setImagen(evento.target.value)
  };
    
  const onClickExportar = function (evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      document.body.appendChild(canvas)
  });
  
  
  };  


  return (
    <div className="App">
      
      {/* Select picker de memes */}
      <select name="" id="" onChange={onChangeImagen }>
        <option value="meme1">Kuzco</option>
        <option value="meme2">Inesperado</option>
        <option value="meme3">Futurama</option>
        <option value="meme4">Quemar</option>
      </select>
      <br/>
      {/* //Input text - Primer linea */}
      <input onChange={onChangeLinea1} type="text" placeholder="linea1"/>
      <br/>

      {/* //Input text - Segunda linea */}
      
      <input onChange={onChangeLinea2} type="text" placeholder="linea2"/>
      <br/>
      {/* //Boton exportar */}

      <button onClick={onClickExportar}>Exportar</button>
      <br/>

      <div className="meme" id="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"/Imagenes/" + imagen + ".jpg"} alt="" />
      </div>
    </div>
  );
}

export default App;
