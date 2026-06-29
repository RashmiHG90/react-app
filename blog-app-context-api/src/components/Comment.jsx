// import { useContext } from "react"
// import UserInfoContext from "../context/UserInfoContext"

export default function Comment({ username, isAdmin }) {

    // const { username, isAdmin } = useContext(UserInfoContext)

    return (
        <div>
            <h3>Comments</h3>
            <p>Logged in as {username}</p>
            {isAdmin && <button>Edit Comment</button>}
        </div>
    )
}