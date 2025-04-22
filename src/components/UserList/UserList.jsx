const users = ["Alice", "Bob", "Charlie"];

function UserList() {
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>{user}</li>
            ))}
        </ul>
    )
}

export default UserList;