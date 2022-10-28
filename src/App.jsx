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
            <Card titulo='#04 - Desafio Aleatório' color='#FA6900'>
                <Aleatorio min={1} max={60}/>
            </Card>

            <Card titulo='#03 - Fragmento'  color='#E94C6F'>
                <Fragmento/>
            </Card>

            <Card titulo='#02 - Com Parâmetro'  color='#E8B71A'>
                <Comparametro 
                    titulo="Situação do aluno" 
                    aluno='Pedro Silva' 
                    nota={8.3}
                /> 
            </Card>

            <Card titulo='#01 - Primeiro Componente'  color='#588C73'>
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
);