import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>My Heading</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. Hello World. This page
                will automatically reload. -Marc Scully
            </p>
            <img src="../images/my_dog.JPEG" alt="A picture of my dog Finn" />
            Unordered List:
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                        First column.
                    </Col>

                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
