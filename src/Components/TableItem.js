import React, { Fragment } from "react"
import './TableItem.css';

export function TableItem({label, value, buttonText, buttonClick}) {

    return (
        <Fragment>
            <div className="table-item">
                <div className="left-item">
                    <label className="item-text"> {label}</label>
                    <label> {value}</label>
                </div>
                <div className="right-item">
                    {buttonText && buttonText.trim() !== '' && (
                    <button className="submit-button small-button" 
                            onClick={buttonClick}> {buttonText}</button>
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default TableItem