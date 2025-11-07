import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]); //use bracket because its array
  const [loading, isLoading] = useState(true); //to show loading

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json()) //the result from server will convert it in json format
      .then((data) => {
        setUsers(data); //to store the data in users variables
        isLoading(false); //loading will stop
      })
      .catch((error) => console.error("Error: ", error));
  }, []); //empty array = pag nag run na at pag nagamit nayung component which is loading

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-start items-center h-64">
      <h2 className="text-xl font-bold text-center">User List</h2>
      <ul>
        {users.map((user) => (
          <li className="list-decimal list-inside" key={user.id}>
            {user.name}
            <li className="list-disc list-inside ml-5">{user.username}</li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
