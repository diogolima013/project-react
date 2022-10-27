import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import App from './App'

ReactDom.render(
    <App></App>,//podemos usar o fechamento de duas formas com o parametro ou apenas o /> 
    document.getElementById('root')
)