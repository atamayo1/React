import { CallBackComponent } from "./components/CallBackComponent"
import { CounterComponent } from "./components/CounterComponent"
import { FetchComponent } from "./components/FetchComponent"
import { FormComponent } from "./components/FormComponent"
import { HeavyCalculateComponent } from "./components/HeavyCalculateComponent"


export const HooksApp = () => {
    return (
        <>
            <h1>App Hooks</h1>
            <button type="button" className="btn btn-warning">Warning</button>
            <hr />
            <CounterComponent />
            <hr />
            <FormComponent />
            <hr />
            <FetchComponent />
            <hr />
            <HeavyCalculateComponent />
            <hr />
            <CallBackComponent />
        </>
    )
}
