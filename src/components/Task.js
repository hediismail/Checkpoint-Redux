import React, { useState } from 'react';
import { Button, Modal, FormControl } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { editTask } from "../js/actions"

const Task = ({ item }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [myInput, setMyInput] = useState(item.text);
    const dispatch = useDispatch();

    return (
        <>

            <Button variant="primary" onClick={() => { handleShow(); setMyInput(item.text) }}>
                Edit
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={myInput}
                        onChange={(e) => setMyInput(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                    <Button variant="primary" onClick={() => { handleClose(); dispatch(editTask(item.id, myInput)) }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Task
