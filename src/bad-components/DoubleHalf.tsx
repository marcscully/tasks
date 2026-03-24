import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

function Doubler({
    setDhValue,
}: {
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <Button onClick={() => setDhValue((prev) => prev * 2)}>Double</Button>
    );
}

function Halver({
    setDhValue,
}: {
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <Button onClick={() => setDhValue((prev) => prev / 2)}>Halve</Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const { dhValue, setDhValue } = useDoubleHalfState(); // use hook

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                <div>The current value is:</div>
                <div>{dhValue}</div>
            </div>
            <Doubler setDhValue={setDhValue} />
            <Halver setDhValue={setDhValue} />
        </div>
    );
}
