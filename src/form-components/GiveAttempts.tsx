import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function Use() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function Gain() {
        const parsedAttempts = parseInt(requestedAttempts, 10);
        if (!isNaN(parsedAttempts) && parsedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    }

    function InputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts Left: {attemptsLeft}</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={InputChange}
                />
            </Form.Group>
            <span>
                <Button onClick={Use} disabled={attemptsLeft <= 0}>
                    Use
                </Button>
                <Button onClick={Gain}>Gain</Button>
            </span>
        </div>
    );
}
