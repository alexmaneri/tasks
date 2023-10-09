import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function handleChoiceChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedValue = event.target.value;
        setSelectedChoice(selectedValue);
    }
    function makeAnswer(expectedAnswer: string, selectedChoice: string) {
        if (selectedChoice === expectedAnswer) {
            return "✔️ Correct";
        } else {
            return "❌ Incorrect";
        }
    }

    return (
        <div>
            <div>
                <Form.Group controlId="MultipleChoiceQuestion">
                    <Form.Label>Select an answer:</Form.Label>
                    <Form.Select
                        value={selectedChoice}
                        onChange={handleChoiceChange}
                    >
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            {makeAnswer(expectedAnswer, selectedChoice)};
        </div>
    );
}
