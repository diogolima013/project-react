import React from "react";
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = '?'
    let idade = 0
    let nerd = false
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
       nome =  nomeParam
       idade = idadeParam
       nerd = nerdParam

       console.log(nomeParam, idadeParam, nerdParam)
    }

    return (
        <div>
            <span>{nome}</span>
            <span><strong>{idade}</strong></span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}