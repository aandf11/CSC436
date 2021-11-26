import React, { useContext } from "react";
import { StateContext } from "./Contexts";
import User from "./User"

export default function UserList() {

    const {state} = useContext(StateContext)
    const {users} = state

    //console.log(users)

    return (
        <div>
            {users.map((u, i) => <User id={u._id} username={u.username} key={'user-' + i}/>)}
        </div>
    )
}