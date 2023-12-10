import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const FetchingData = () => {
  // const [users, setUsers] = useState([]);

  const [users1, setUsers1] = useState<User[]>([]);

  const [users2, setUsers2] = useState<User[]>([]);

  const [users3, setUsers3] = useState<User[]>([]);
  const [error3, setError3] = useState("");

  const [users4, setUsers4] = useState<User[]>([]);
  const [error4, setError4] = useState("");

  const [users5, setUsers5] = useState<User[]>([]);
  const [error5, setError5] = useState("");

  const [users6, setUsers6] = useState<User[]>([]);
  const [error6, setError6] = useState("");

  const [users7, setUsers7] = useState<User[]>([]);
  const [error7, setError7] = useState("");
  const [loading, setLoading] = useState(false);

  // get response
  useEffect(() => {
    // get  -->  promise  -->  res / err

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log("res", res, "res.data", res.data));
  }, []);
  // /get response

  // fetch data
  useEffect(() => {
    // fetch element[0] of array
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
    // /fetch element[0] of array

    // fetch data
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers1(res.data));
    // /fetch data
  }, []);
  // /fetch data

  // handling error
  useEffect(() => {
    // log error
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/abcde")
      .then((res) => setUsers2(res.data))
      .catch((err) => console.log("err", err));
    // /log error

    // show error message
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/abcde")
      .then((res) => setUsers3(res.data))
      .catch((err) => setError3(err.message));
    // /show error message
  }, []);
  // /handling error

  // async & await
  useEffect(() => {
    // get  -->  await promise  -->  try { res }, catch { err }
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/abcde",
        );
        setUsers4(res.data);
        console.log("async & await res.data", res.data);
      } catch (err) {
        setError4((err as AxiosError).message);
        console.log("async & await err.message", (err as AxiosError).message);
      }
    };
    fetchUsers();
  }, []);
  // /async & await

  // abort controller
  useEffect(() => {
    const controller1 = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller1.signal,
      })
      .then((res) => setUsers5(res.data))
      .catch((err) => setError5(err.message));

    return () => controller1.abort();
  }, []);
  // /abort controller

  // abort controller - remove canceled
  useEffect(() => {
    const controller2 = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller2.signal,
      })
      .then((res) => setUsers6(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError6(err.message);
      });

    return () => controller2.abort();
  }, []);
  // /abort controller - remove canceled

  // loading indicator
  useEffect(() => {
    const controller3 = new AbortController();
    setLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller3.signal,
      })
      .then((res) => {
        setUsers7(res.data);
        setLoading(false); // method-1
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError7(err.message);
        setLoading(false); // method-1
      })
      .finally(
        // method-2  -->  setLoading(false) in finally
        // () => setLoading(false),
        () => {
          console.log("method-2  -->  setLoading(false) in finally");
        },
      );

    return () => controller3.abort();
  }, []);
  // /loading indicator

  return (
    <div>
      <div className="py-5">
        <h1>Fetching Data</h1>

        <ul className="menu bg-base-200 rounded-box w-56">
          {users1.map((user1) => (
            <li key={user1.id}>
              <a>{user1.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="py-5">
        <h1>Handling Error</h1>

        {error3 && (
          <p>
            <span className="rounded bg-red-400 px-2 py-1 text-red-950">
              {error3}
            </span>
          </p>
        )}
        <ul className="menu bg-base-200 rounded-box w-56">
          {users3.map((user3) => (
            <li key={user3.id}>
              <a>{user3.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="py-5">
        <h1>Abort Controller</h1>

        {error5 && (
          <p>
            <span className="rounded bg-red-400 px-2 py-1 text-red-950">
              {error5}
            </span>
          </p>
        )}
        <ul className="menu bg-base-200 rounded-box w-56">
          {users5.map((user5) => (
            <li key={user5.id}>
              <a>{user5.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="py-5">
        <h1>Abort Controller - Remove canceled</h1>

        {error6 && (
          <p>
            <span className="rounded bg-red-400 px-2 py-1 text-red-950">
              {error6}
            </span>
          </p>
        )}
        <ul className="menu bg-base-200 rounded-box w-56">
          {users6.map((user6) => (
            <li key={user6.id}>
              <a>{user6.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="py-5">
        <h1>Abort Controller - Remove canceled</h1>

        {error7 && (
          <p>
            <span className="rounded bg-red-400 px-2 py-1 text-red-950">
              {error7}
            </span>
          </p>
        )}
        {loading && (
          <div>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        <ul className="menu bg-base-200 rounded-box w-56">
          {users7.map((user7) => (
            <li key={user7.id}>
              <a>{user7.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchingData;
