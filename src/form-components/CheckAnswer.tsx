import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="AnswerChecker">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={answer}
                    onChange={updateDescription}
                />
            </Form.Group>
            answer === {expectedAnswer} ? <div>✔️</div>: <div>❌</div>;
        </div>
    );
}
