import React, { useEffect, useState } from "react";
import { getUsers, addUser } from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  const handleAdd = () => {
    addUser({ name }).then(() => window.location.reload());
  };

  return (
    <div>
      <h1>Users</h1>

      <input onChange={e => setName(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;