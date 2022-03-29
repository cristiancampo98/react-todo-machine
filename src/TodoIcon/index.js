import React from "react";
import "./TodoIcon.css"
import { BsCheckCircle } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"


function TodoIcon({ type, className, onClick }) {

    const iconTypes = {
        check: (<BsCheckCircle />),
        delete: (<AiOutlineDelete />)
    }

    return (
        <span className={`Icon-container ${className}`} onClick={onClick}>
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon }