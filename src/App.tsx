import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UM COS420 with React Hooks and TypeScript</h1>
            </header>

            <img src="../images/my_dog.jpg" alt="My dog" />

            <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Bootstrap</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <div style={{ backgroundColor: "red" }}>Red Background</div>

            <hr />
            <Counter />

            <hr />
            <RevealAnswer />

            <hr />
            <TwoDice />

            <hr />
            <ChangeType />
        </div>
    );
}

export default App;
