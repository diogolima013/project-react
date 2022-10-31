import './App.css'
import React from "react";

import Card from "./components/layout/Card";

import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelasProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/components/Familia';
import FamiliaMembro from './components/components/FamiliaMembro';
import Aleatorio from "./components/components/Aleatorio";
import Fragmento from './components/components/Fragmento'
import Comparametro from './components/components/ComParametro'
import Primeiro from './components/components/Primeiro'

export default () => (

    <div className='App'>
        <h1>Fundamentos React </h1>

            <div className="Cards">
            <Card titulo='#11 - Componente Controlado (Input)' color='#E45F56'>
               <Input></Input>
            </Card>

            <Card titulo='#10 - Comunicação Indireta' color='#8BAD39'>
               <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo='#09 - Comunicação Direta' color='#59323C'>
                <DiretaPai></DiretaPai>
            </Card>  

            <Card titulo='#08 - Renderização Condicional ' color='#982395'>
               <ParOuImpar numero={21}/>
               <UsuarioInfo usuario={{ nome: 'Fernando'}}/>
               {/*<UsuarioInfo usuario={{}}/>*/}
            </Card>

            <Card titulo='#07 - Desafio Repetição' color='#3A9AD9'>
               <TabelaProdutos/>
            </Card>

            <Card titulo='#06 - Repetição' color='#FF4C65'>
                <ListaAlunos/>
            </Card>
           
            <Card titulo='#05 - Componente com Filhos' color='#00C8F8'>
            <Familia sobrenome='Silva'>
                <FamiliaMembro nome='Pedro' />
                <FamiliaMembro nome='Ana'/>
                <FamiliaMembro nome='Gustavo'/>
            </Familia>
            </Card>

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