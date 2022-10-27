import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

 const tag =  <strong>Olá React!</strong>

ReactDom.render(
    <div>
        {tag}
    </div>, 
    document.getElementById('root')
)