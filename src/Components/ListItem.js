import React from "react"

export function ListItem({label, value}) {

    return (
        <div> 
            <label> {label} </label>
            <label> {value} </label>
        </div>
    )
}

export default ListItem