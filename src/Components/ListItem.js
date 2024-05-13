import React from "react"
import './ListItem.css';

export function ListItem({label, value}) {

    return (
        <div className="listItem-container"> 
            <label> {label} </label>
            <label> {value} </label>
        </div>
    )
}

export default ListItem