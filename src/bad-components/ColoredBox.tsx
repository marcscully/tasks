import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setColorIndex,
}: {
    setColorIndex: (newIndex: number | ((prev: number) => number)) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() =>
                setColorIndex((prev: number) => (prev + 1) % COLORS.length)
            }
        >
            Next Color
        </Button>
    );
}

function ColorPreview({
    colorIndex,
}: {
    colorIndex: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        />
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                {/* DO NOT put a Button here. Only use the component. */}
                <ChangeColor setColorIndex={setColorIndex} />
                <ColorPreview colorIndex={colorIndex} />
            </div>
        </div>
    );
}
