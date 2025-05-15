import { useMemo, useState } from "react"

export const HeavyCalculateComponent = () => {
    const [show, setShow] = useState(false);
    const [numList, setNumList] = useState([1, 2, 3, 4, 5, 6, 7])

    const getCalculate = (numList) => {
        console.log("Calculando...");
        return numList.reduce((a, b) => a * b);
    }

    const addNumber = () => {
        setNumList([...numList, numList[numList.length - 1] + 1]);
    }
    // Memorizar un valor o calculo que devuelva un valor
    const memorizedValue = useMemo(() => getCalculate(numList), [numList]);

    return (
        <>
            <h2>Calculos:</h2>
            <h4>El calculo es: {memorizedValue}</h4>
            {show && <h6>Los numeros base son: {numList}</h6>}
            <button type="button" className="btn btn-info" onClick={() => setShow(!show)}>{show ? 'Ocultar calculo' : 'Mostrar calculo'}</button>
            <button type="button" className="btn btn-danger" onClick={addNumber}>Agregar más números</button>
        </>
    )
}
