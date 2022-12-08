import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import CarList from "./CarList";
import NewCar from "./NewCar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleDelete () {
    fetch("/cars")
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewCar user={user} />
          </Route>
          <Route path="/">
            <CarList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
