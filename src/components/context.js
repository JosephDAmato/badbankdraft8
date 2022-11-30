import React, { useContext, useState, createContext } from "react";
//import react bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const UserContext = createContext({users: [{name:"Abel", email: "abel@mit.edu", password: "secret"}]});

function ContextCard (props) {
  function classes(){
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-3 ' + bg + txt;
  }
            return ( 
              <div 
                className={classes()} 
                style={{ maxWidth: '18rem' }}>
                <div className="card-header">{props.header}</div>
                <div className="card-body">
                  {props.title && (<h5 className="card-title">{props.title}</h5>)}
                  {props.text && (<p className="card-body">{props.text}</p>)}
                  {props.body}
                  {props.status && (<div id="CreateStatus">{props.status}</div>)}
                </div>
              </div>
    )
}

export default ContextCard;