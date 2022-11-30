import React from "react"

export default function Card (props) {

    return (
        <div className="card-container" onClick={(event) => props.handleClick(event, props.id)}>
            <div className="card-img-container">
                <img src={props.photo} />
            </div>
            <div className="card-header">
                <h2>{props.title}</h2>
            </div>
        </div>
    )

}