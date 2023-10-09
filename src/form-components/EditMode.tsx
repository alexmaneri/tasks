import React, { useState } from "react";
import { Form } from "react-bootstrap";

export type Switch = "is a student" | "is not a student";

export function EditMode(): JSX.Element {
    const [mode, changeMode] = useState<boolean>(false);
    const [name, changeName] = useState<string>("Your Name");
    const [status, changeStatus] = useState<boolean>(true);

    function Editor(event: React.ChangeEvent<HTMLInputElement>) {
        changeMode(event.target.checked);
    }
    function Enroller(event: React.ChangeEvent<HTMLInputElement>) {
        changeStatus(event.target.checked);
    }
    function Typer(event: React.ChangeEvent<HTMLInputElement>) {
        changeName(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formName">
                <Form.Label>Name Selecter</Form.Label>
                {mode && (
                    <Form.Control
                        value={name}
                        onChange={Typer}
                        disabled={!mode}
                    />
                )}
            </Form.Group>

            <Form.Check
                type="switch"
                id="switch"
                label="switch"
                checked={mode}
                onChange={Editor}
            />

            {mode && (
                <Form.Check
                    type="checkbox"
                    id="checkbox"
                    label="student"
                    checked={status}
                    onChange={Enroller}
                    disabled={!mode}
                />
            )}
            <span>
                {status && !mode ? (
                    <span>{name} is a student.</span>
                ) : !mode ? (
                    <span>{name} is not a student.</span>
                ) : (
                    <div></div>
                )}
            </span>
        </div>
    );
}
