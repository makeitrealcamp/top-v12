import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function Users({ users }) {
  return (
    <section>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <article key={user.id}>
            <h3>{user.name}</h3>
          </article>
        );
      })}
    </section>
  );
}

function Posts({ posts }) {
  return (
    <section>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        );
      })}
    </section>
  );
}

function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      "antes de enviar",
      email,
      password,
      process.env.REACT_APP_SERVER_URL
    );
    setLoading(true);
    try {
      const data = await axios({
        method: "post",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/users",
        data: {
          email,
          password,
        },
      });
      console.log("despues del request", data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  console.log("loa", loading);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Constraseña
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      {loading ? <p>loading...</p> : null}
    </>
  );
}

function App() {
  const [createUser, setCreateUser] = useState(false);

  const getData = async () => {
    try {
      const data = await axios({
        method: "get",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/users",
      });
      console.log("data", data);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const usersMock = [
    {
      id: 1,
      name: "Caro",
    },
    {
      id: 2,
      name: "Angie",
    },
  ];

  const postsMock = [
    {
      id: 1,
      title: "Primer",
      body: "Esto es un body",
    },
  ];

  const handleCreateUser = () => setCreateUser((previous) => !previous);
  return (
    <div className="App">
      <Users users={usersMock} />
      <Posts posts={postsMock} />
      <button onClick={handleCreateUser}>Crear un usuario</button>
      {createUser ? <CreateUser /> : null}
    </div>
  );
}

export default App;
