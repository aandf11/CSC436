import React from 'react'
export default function Todo ({ title, description, dateCreated, complete, dateCompleted }) {

    return (
    <div>
        <h3>{title}</h3>
        <div>{description}</div>
        <br />
        <div>{dateCreated}</div>
        <br/>
        <div>{complete}<label><input type="checkbox"/>Yes Or No?</label>
        </div>
        <br/>
        <div>{dateCompleted}</div>
        {/* <i>Written by <b>{author}</b></i> */}
        </div>  
              )
            }