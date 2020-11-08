import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./constants";


export function addTask(payload) {
    return {
        type: ADD_TASK,
        payload,
    }
};

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        id,
    }
};

export function doneTask(payload) {
    return {
        type: DONE_TASK,
        payload,
    }
};

export function editTask(id, text) {
    return {
        type: EDIT_TASK,
        id,
        text,
    }
};

// export function filterTask() {
//     return {
//         type: EDIT_TASK,
//     }
// };