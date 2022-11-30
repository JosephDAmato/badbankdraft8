import { UserContext } from "./context";
import React, { useState, useContext } from "react";

function Deposit (){
    const ctx = useContext(UserContext);
    return(
        <h1>Deposit</h1>
    )
}

export default Deposit