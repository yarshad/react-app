import { useState } from "react";
import "./App.css";

import User from "./assets/components/User";
import { useEffect } from "react";


function App() {

  const url = "https://jsonplaceholder.org/users"

  const [users, setUsers] = useState(null)
  const[error, setError] = useState(null)

  const fetchUsers = async () =>  {

    const response = await fetch(url);

    if(!response.ok){
      console.log("Some error occured" + response.status)
      setError(response.error)
    }

    let userData = await response.json()
    setUsers(userData)
    console.log(userData)
    // return userData;
  }

  const reset = () => {
    setUsers(null)
  }

  const reload = () =>{
    fetchUsers()
  }

  useEffect(() =>{
   fetchUsers()
  },[])

  return (
    <>
  <h4>User List</h4>
  <button onClick={reset}>Reset</button>
  <button onClick={reload}>Reload</button>

   {users && users.map((u) => {
      return  (<User key={u.id} id={u.id} firstName={u.firstname} lastName={u.lastname}/>)
   })
   }
    </>
  );
}

export default App;
