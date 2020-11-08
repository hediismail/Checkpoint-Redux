import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../js/actions";
import {Form, Button} from "react-bootstrap";

const AddItem = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const add = (e) => {
        e.preventDefault()
        if (input.trim()) {
            dispatch(addTask({ text: input, id: Math.random(), isDone: false }));
            setInput("");
        }
        else { alert("write something") }
    }
    return (
        <div style={{    padding: "1%",
            backgroundColor: "blue"}}>
            <Form onSubmit={add}>
            <input
                style={{width: "50%"}}
                onChange={(e) => setInput(e.target.value)}
                value={input} />
            <Button onClick={add} variant="primary">Add</Button>
            </Form>
            <br />
            {/* <button onClick={() => dispatch(filterTask())}>filter</button> */}
        </div>
    )
}

export default AddItem
