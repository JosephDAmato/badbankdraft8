import ContextCard, { UserContext } from "./context";
import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";


function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);
  /*const { user, setUser } = useContext(UserContext)*/;



  function validation(field, label){
    if(!field) {
        setStatus(`Error: ${label}`);
        setTimeout(() => setStatus(''), 3000);
        return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name, email, password);
    if (!validation(name, "name")) return; 
    if (!validation(email, "email")) return;
    if (!validation(password, "password")) return;
    ctx.users.push({name, email, password, balance:100});
    console.log(ctx);
    setShow(false);
  }

  function clearForm(){
    setName('')
    setEmail('');
    setPassword('')
    setShow(true);
  }

  return (
    <>
      <ContextCard
        bgcolor="secondary"
        txtcolor="light"
        header="Create Your Account Today and Start Banking"
        status={status}
        body={
          show ? (
            <>
              <div>
                <br />
                Name
                <br />
                <input type="input" 
                  className="form-control" 
                  id="name" 
                  placeholder="Name..." 
                  value={name} 
                  onChange={e => setName(e.currentTarget.value)} /><br />
                Email
                <br />
                <input type="input" 
                  className="form-control"
                   id="email" placeholder="Email@Provider.com..." 
                  value={email}
                  onChange={e => setEmail(e.currentTarget.value)} /><br />
                Password
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="password"
                  placeholder="Password..."
                  value={password}
                  onChange={e => setPassword(e.currentTarget.value)}
                /><br />
                <br />
                <Button type="submit" className="button is-info" onClick={handleCreate}>Create Account</Button>
              </div>
            </>
          ) : (
            <>
            <h5>SUCCESS!</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button> 
            <br /><br />
            <button type="link" className="btn btn-light">Login</button>
            </>
          )
        }
      />
    </>
  );
}

export default CreateAccount;
