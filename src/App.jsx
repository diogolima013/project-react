import React from "react";

import Primeiro from './components/components/Primeiro'
import Comparametro from './components/components/ComParametro'
import Fragmento from './components/components/Fragmento'

export default () => (

    <div id='app'>
        <h1>Fundamentos React </h1>
        <Fragmento/>
        <Comparametro 
            titulo="Situacao do aluno" 
            aluno='Pedro!' 
            nota={8.3}
        /> 
        <Primeiro></Primeiro>
    </div>
);