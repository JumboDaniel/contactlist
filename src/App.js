import React, {useEffect, useState} from "react";

export default function App() {
  const [allData, setAllData]= useState([]);
  const [users, setUsers]= useState(allData)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        if(response.ok){
          return response.json()
        }
        throw response
    })
    .then((data)=>{
      setAllData(data)
      setUsers(data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  const handleSearch= (e)=>{
    let value = e.target.value.toUpperCase();
    let result = [];
    console.log(value)
    result = allData.filter((data)=>{
      return data.name.search(value) !== -1;
    })
    setUsers(result)
    console.log(result)

  }
  return (
    <div>
      <div>
      <label>Search:</label>
      <input type="text"  onChange={(e) =>handleSearch(e)} />
      </div>
      {users.map((user, index) =>{
          return( 
            <div>
             <p key={user.id}>Name: {user.name} <br/>- Username: {user.username}<br/>- email: {user.email}</p>
             </div>
             )
      })}
    </div>
  );
}
