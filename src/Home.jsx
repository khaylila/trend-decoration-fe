import { useCookies } from "react-cookie";

import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "./App.jsx";

function Home() {
  const loggedIn = useContext(LoginContext);

  useEffect(() => console.log(loggedIn));

  return <h1>Home Page</h1>;
}

export default Home;
