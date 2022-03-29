import React from "react";
import { TodoIcon } from "../TodoIcon";
import "./TodoItem.css";

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <TodoIcon type="check" className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete} />

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <TodoIcon type="delete" className="Icon Icon-delete" onClick={props.onDelete} />
        </li>
    );
}

export { TodoItem }