import React, { useContext } from "react";
import ContextCard, { UserContext } from "./context";
import { Button } from "react-bootstrap";

function Home() {
  const ctx = useContext(UserContext);
  return (
    <ContextCard
      bgcolor="secondary"
      txtcolor="black"
      header="Welcome to Bad Bank"
      title="Leader in Security - less banking"
      text="Get Started Today"
      body={
        <>
          <Button variant="light" className="black">Login</Button>
          <Button variant="light" className="createAccount">Create Account Today</Button>
        </>
      }
    />
  );
}

export default Home;
