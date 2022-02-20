import React,{useState} from 'react'
import './Hooks.css';
import logo from './images/descarga.png';

const Hooks = () => {
    /* estado del label que  maneja el cambio de Números */
    const[letra,setLetra]=useState("0")
    /* funcion que cambia el  valor del laber */
    const cambioLetra=()=>{
        if(letra==="0")
            setLetra("1")
            if(letra==="1")
            setLetra("5")
            if(letra==="5")
            setLetra("6")
            if(letra==="6")
            setLetra("0")
    }
    return (
        <>
         <div class="navbar">
             <img src={logo} width="90px"/>
             <label class="navbar"> Generador de Números Aleatorios generarnumerosaleatorios.es</label>
          </div>
         {/* el div que tiene los Números */}
          <div className="container">
          <h5 className="titulo">Generar  Números aleatorios<br/></h5>
          <p className="parrafo"> Simple generador de números aleatorios. <br></br>Solo elige el rango y generá tus números!!</p>
          <label className='label'>Desde</label>
          <input  className='input' type="text" name="" id="" />
          <label className='label'>Hasta</label>
          <input className='input' type="text" name="" id="" />
          <label className='label' > Número de Resultado</label>
           <label  className='label1'><span>{letra}</span></label>
           <label className='label' ></label>
           <button className='btn' onClick={cambioLetra}>Generar Número</button>
          </div>
        </>
    )
}

export default Hooks
