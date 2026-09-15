import { useState } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState(null);

    const showFacts = () => {
        fetch("http://localhost:3000/api/data")
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return ( <
        div className = "container" >
        <
        h1 > JSON Data Viewer < /h1>

        <
        button onClick = { showFacts } >
        Show JSON Data <
        /button>

        {
            data && ( <
                pre > { JSON.stringify(data, null, 2) } < /pre>
            )
        } <
        /div>
    );

    export default App;