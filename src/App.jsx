import React from "react";

import Aleatorio from "./components/components/Aleatorio";
import Fragmento from './components/components/Fragmento'
import Comparametro from './components/components/ComParametro'
import Primeiro from './components/components/Primeiro'

export default () => (

    <div id='app'>
        <h1>Fundamentos React </h1>
        <Aleatorio min={1} max={60}/>
        <Fragmento/>
        <Comparametro 
            titulo="Situacao do aluno" 
            aluno='Pedro!' 
            nota={8.3}
        /> 
        <Primeiro></Primeiro>
    </div>
);