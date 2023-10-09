import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    { name: "Red", highlight: "red" },
    { name: "Green", highlight: "green" },
    { name: "Blue", highlight: "blue" },
    { name: "Yellow", highlight: "yellow" },
    { name: "Purple", highlight: "purple" },
    { name: "Orange", highlight: "orange" },
    { name: "Pink", highlight: "pink" },
    { name: "Teal", highlight: "teal" }
];

export function ChangeColor() {
    const [selectedColor, setSelectedColor] = useState("");

    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <div>
                {colors.map((color) => (
                    <Form.Check
                        key={color.name}
                        type="radio"
                        label={color.name}
                        value={color.name}
                        inline
                        checked={selectedColor === color.name}
                        onChange={handleColorChange}
                        style={{
                            backgroundColor: color.highlight,
                            marginRight: "10px"
                        }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
