import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/components/Primeiro'

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
    </div>, 
    document.getElementById('root')
)