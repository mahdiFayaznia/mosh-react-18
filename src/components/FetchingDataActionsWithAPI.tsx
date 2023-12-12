import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import userService, { User } from "../services/user-service";
import useUsers from "../hooks/useUsers";

const FetchingDataActions = () => {
  // const [users, setUsers] = useState<User[]>([]);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   // const { request, cancel } = userService.getAllUsers();
  //   const { request, cancel } = userService.getAll<User>();

  //   request
  //     .then((res) => {
  //       setUsers(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });

  //   return () => cancel();
  // }, []);

  const { users, error, loading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id)); // update the ui

    // userService.deleteUser(user.id).catch((err) => {
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mahdi" };
    // setUsers([...users, newUser]); // update ui, add user to the bottom of the list
    setUsers([newUser, ...users]); // update ui, add user to the beginning of the list

    // .then((res) => setUsers([res.data, ...users]));
    // .then(({ data }) => setUsers([data, ...users])); // destructure the res.data
    // .createUser(newUser)
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users])) // rename data to savedUser  -->  savedUser is alias
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // put: replacing an object
    // patch: patching/updating properties

    // userService.updateUser(updatedUser).catch((err) => {
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div className="py-5">
      <h1>Fetching-Data Actions with API Client</h1>

      {error && (
        <p className="mb-3">
          <span className="rounded bg-red-400 px-2 py-1 text-red-950">
            {error}
          </span>
        </p>
      )}
      {loading && (
        <div>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <button
        className="btn btn-outline btn-success btn-sm w-full sm:w-[75%] md:w-[50%] xl:w-[40%]"
        onClick={() => addUser()}
      >
        Add with API
      </button>
      <ul className="menu bg-base-200 rounded-box w-full sm:w-[75%] md:w-[50%] xl:w-[40%]">
        {users.map((user) => (
          <li key={user.id} className="flex flex-row justify-between">
            <a>{user.name}</a>
            <div>
              <button
                className="btn btn-outline btn-accent btn-sm"
                onClick={() => updateUser(user)}
              >
                Update with API
              </button>
              <button
                className="btn btn-outline btn-error btn-sm"
                onClick={() => deleteUser(user)}
              >
                Delete with API
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingDataActions;
