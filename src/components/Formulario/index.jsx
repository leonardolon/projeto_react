import { useState } from "react"

const Formulario = () => {
    let [peso, setPeso] = useState('');
    let [altura, setAltura] = useState('');

    const renderizaResultado = () => {
        const calc = (peso / (altura * altura));

        if (calc < 18,5){
            return(
                <p>Magreza</p>
            )
        }

        else if (calc < 25){
            return(
                <p>Normal</p>
            )
        }

        else if (calc < 30){
            return(
                <p>Sobrepeso</p>
            )
        }

        else if (calc < 40){
            return(
                <p>Obesidade</p>
            )
        }

        else{
            return(
                <p>Obesidade Grave</p>
            )
        }
    }

    return (
        <form>
            <input type="number" placeholder="Sua altura" value={altura} onChange={evento => setAltura(evento.target.value) / 100} /> 
            <input type="number" placeholder="Seu peso" value={peso} onChange={evento => setPeso(evento.target.value)}  /> 
            {renderizaResultado()}
        </form>
    )
}

export default Formulario 