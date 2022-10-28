import './App.css'
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/components/Aleatorio";
import Fragmento from './components/components/Fragmento'
import Comparametro from './components/components/ComParametro'
import Primeiro from './components/components/Primeiro'

export default () => (

    <div className='App'>
        <h1>Fundamentos React </h1>

        <div className="Cards">
            <Card titulo='#04 - Desafio Aleatório'>
                <Aleatorio min={1} max={60}/>
            </Card>

            <Card titulo='#03 - Fragmento'>
                <Fragmento/>
            </Card>

            <Card titulo='#02 - Com Parâmetro'>
                <Comparametro 
                    titulo="Situação do aluno" 
                    aluno='Pedro Silva' 
                    nota={8.3}
                /> 
            </Card>

            <Card titulo='#01 - Primeiro Componente'>
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
);