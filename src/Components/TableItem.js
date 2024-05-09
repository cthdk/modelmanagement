import React, { Fragment } from "react"

export function TableItem({label, value, buttonText, buttonClick}) {

    return (
        <Fragment>
            <div> 
                <label> {label} </label>
                <label> {value} </label>
            </div>
            <button onClick={buttonClick}> {buttonText} </button>
        </Fragment>
    )
}

export default TableItem