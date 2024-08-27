import React from 'react'

// aqui un comentario

function Home(){
    const listitems = [1, 2, 3, 4]

    const addItem = () => {
        const varA = 1;
        const varB = 3;
        const varC = 2;

        return varA * 3 + varB * varC
    }

    return ( <><div>Home</div><p>Hola mundo...</p><button onclick={addItem}></button></>)
}

export default Home
