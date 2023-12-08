import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const FetchingData = () => {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // return a promise
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log("res", res, "res.data", res.data));

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        console.log(
          "res.data[0].id",
          res.data[0].id,
          "res.data[0].name",
          res.data[0].name,
        ),
      );

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1>Fetching Data</h1>

      <ul className="menu bg-base-200 rounded-box w-56">
        {users.map((user) => (
          <li key={user.id}>
            <a>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingData;
