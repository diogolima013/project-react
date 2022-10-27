import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/components/Primeiro'
import Comparametro from './components/components/ComParametro'

ReactDom.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <Comparametro 
        titulo="Situacao do aluno" 
        aluno='Pedro!' nota={9.3}/> 
        
    </div>,//podemos usar o fechamento de duas formas com o parametro ou apenas o /> 
    document.getElementById('root')
)