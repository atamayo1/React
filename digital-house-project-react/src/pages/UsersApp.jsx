import { useState } from "react";
import { FetchList } from "./components/FetchList";

export const UsersApp = () => {
    const [endpoint, setEndpoint] = useState('users');
    return (
        <>
            <h1 className="red">List:</h1>
            <FetchList endpoint={endpoint} setEndpoint={setEndpoint} />
            <button onClick={() => setEndpoint('comments')}>Cambiar el endpoint</button>
        </>
    )
}
