
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="users">
      <h1>Users</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} — {u.email} — {u.username} — {u.phone} — {u.website}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
