import React, { useState } from 'react'

export default function Prueba1() {

const [contador, setEdad] = useState(0)

const clicSaluda = () => {
    let nombre = prompt('cual es tu nombre?')
    if (nombre != null && nombre !== '' ) {
        alert(`Hola ${nombre}`)
    } else {
        alert('Hola desconocidx!')
    }
}
const fechaAct = new Date()
const anioAct = fechaAct.getFullYear()

const clicEdad = () => {
    let anioNac = prompt('en que año naciste?')
    alert(`tenes años ${anioAct-anioNac}...+/- 1 año`)
    
}

const clicCont = () => setEdad(contador+1)

    return (
    <div>
        <h1>Primer Proyecto de Prueba</h1>
        <br />
        <h2>Soy un contador: {contador}</h2>
        <br />
        <button onClick={clicSaluda}>Soy un botón que saluda</button>
        <button onClick={clicEdad}>Soy un botón que calcula tu edad</button>
        <button onClick={clicCont}>Puedo incrementar el contador</button>
    </div>
  )
}
