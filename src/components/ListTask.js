import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../js/actions';
import Task from './Task';
import { Button } from "react-bootstrap"

const ListTask = () => {
    const task = useSelector((state) => state.list);
    const dispatch = useDispatch()
    return (
        <div style={{ backgroundColor: "aqua" }}>
            {task.map((item, key) =>
                <div key={key} style={{ display: "flex", justifyContent: "space-evenly", padding: "1%" }}>
                    <div>
                    <Task item={item} />
                    <Button onClick={() => dispatch(deleteTask(item.id))} variant="danger">Delete</Button>
                    <Button onClick={() => dispatch(doneTask(item))} variant="success">{item.isDone ? "isDone" : "UnDone"}</Button>
                    </div>
                    <p style={item.isDone ? { textDecoration: "line-through" } : null}>{item.text}</p>
                </div>
            )}
        </div>
    )
}

export default ListTask
