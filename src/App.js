import React, { useState, useContext, useMemo } from "react";
//import react router:
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import React-Bootstrap:
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
//import component files below:
import Home from "./components/home";
import Login from "./components/login";
import CreateAccount from "./components/create_account";
import Deposit from "./components/deposit";
import Withdraw from "./components/withdraw";
import AllData from "./components/all_data";
import bank from "./components/bank.png";
import { UserContext } from "./components/context";

function App() {
  const [user, setUser] = useState(null);
// Below, providerValue WIll not change unless [value, setvalue] change
const ctx = useContext(UserContext);

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <h1 style={{ display: "inline", paddingRight: "20px" }}>
              Bad Bank
            </h1>
            <img
              src={bank}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Bad Bank"
              style={{ marginTop: "8px" }}
            />
          </Navbar.Brand>
          <Nav className="me-auto" id="nav-menu">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/create_account">Create Account</Nav.Link>
            <Nav.Link href="/deposit">Deposit</Nav.Link>
            <Nav.Link href="/withdraw">Withdraw</Nav.Link>
            <Nav.Link href="/all_data">All Data</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <UserContext.Provider value={ctx}>
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/login"          element={<Login />} />
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/deposit"        element={<Deposit />} />
        <Route path="/withdraw"       element={<Withdraw />} />
        <Route path="/all_data"       element={<AllData />} />
      </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
