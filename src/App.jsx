import { useState } from "react";
const myOS = require("os")

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  

  function onSubmitHandle(e) {
    e.preventDefault(true);
    if (!name || !email) return null;
    const id = Date.now()
    const userinfo = { id, name, email };
    const updateuserinfo = [...user, userinfo];
    setUser(updateuserinfo);
    setName("")
    setEmail("")
  }

  function removeHandler(id) {
    const userFilter = user.filter(u => u.id !== id)
    setUser(userFilter)
  }
  return (
    <div className="container mx-auto p-5 font-thin">
      <div className="p-5 w-full">
        <h1 className="text-center text-6xl font-thin">Insert Form</h1>
{/*         <h1 className="text-center font-thin">{myOS.userInfo()}</h1> */}
      </div>
      <div className="w-full md:flex">
        <div className="w-full md:w-1/4">
          <form className="w-3/4 border p-5 mx-auto" onSubmit={onSubmitHandle}>
            <h2 className="text-center text-2xl">Register Form</h2>
            <label htmlFor="fullname">Full Name</label>
            <br />
            <input
              type="text"
              id="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-8 border bg-transparent mb-5 p-5"
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-8 border bg-transparent p-5 focus:border-red-500"
            />
            <br />
            <br />
            <button type="submit" className="border py-1 px-3 ">
              Insert
            </button>
          </form>
        </div>
        <div className="w-full mt-5 md:w-3/4 md:mt-0">
          <h2 className="text-2xl text-center">Register List</h2>
          <table className="table-auto w-full border-collapse border border-slate-200">
            <thead>
              <tr>
                <th>#</th>
                <th>Fullname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {user.map((u) => {
                return (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <tr><h4 className="text-amber-400 underline cursor-pointer" onClick={() => removeHandler(u.id)}>Remove</h4></tr>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
