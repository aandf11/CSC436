import React from 'react'
export default function CreateTodo ({user}) {
    return (<form onSubmit={e => e.preventDefault()}
    ><div>Logged In User: <b>{user}</b></div>
    <div>
        <label htmlFor="create-title">Todo:</label>
        <input type="text" name="create-title" id="create-title" />
        </div>
        Description:<textarea />
        <input type="submit" value="Create" />
        </form>
            )
        }