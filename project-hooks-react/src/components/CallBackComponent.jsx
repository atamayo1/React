import { useCallback, useState } from "react"
import { IncrementComponent } from "./IncrementComponent";

export const CallBackComponent = () => {
    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback((val) => {
        setCounter(prev => prev + val);
    }, [])

    return (
        <>
            <h1>Counter: {counter}</h1>
            <IncrementComponent increment={incrementFather} />
        </>
    )
}
