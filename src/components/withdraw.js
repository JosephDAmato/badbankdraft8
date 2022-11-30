import { UserContext } from "./context";
import React, { useState, useContext } from "react";

function Withdraw (){
    const ctx = useContext(UserContext);
    return(
        <h1>Withdraw</h1>
    )
}

export default Withdraw;