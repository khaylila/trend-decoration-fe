// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { useCookies } from "react-cookie";
// import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext value={loggedIn}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </LoginContext>
  );
  // const [count, setCount] = useState(0);
  // const [cookies, setCookie, removeCookie] = useCookies(["jwtToken"]);
  // const jwtCookie = (accessToken) => {
  //   setCookie("jwt-token", accessToken, { path: "/" });
  // };
  // async function postData(url = "", data = {}) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     credentials: "same-origin",
  //     headers: {
  //       // "Content-Type": "application/x-www-form-urlencoded",
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow",
  //     referrerPolicy: "no-referrer",
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // }
  // const cobaLogin = () => {
  //   postData("http://localhost:8080/api/login", {
  //     email: "mochamadroiyan@gmail.com",
  //     password: "70151",
  //   }).then((data) => {
  //     console.log(data);
  //     if (data.status_code == 200) {
  //       jwtCookie(data.access_token);
  //     }
  //   });
  // };
  // Example POST method implementation:
  // async function postData(url = "", data = {}) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: "follow",
  //     referrerPolicy: "no-referrer",
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // }
  // postData("http://localhost:8080/api/login", {
  //   email: "mochamadroiyan@gmail.com",
  //   password: "70151",
  // }).then((data) => {
  //   console.log(data); // JSON data parsed by `data.json()` call
  // });
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button
  //         onClick={() => {
  //           setCount((count) => count + 1);
  //           cobaLogin();
  //           // logMovies();
  //         }}
  //       >
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // );
}

export default App;
