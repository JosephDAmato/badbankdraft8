

import  ContextCard, { UserContext } from "./context";
import React, { useState, useContext } from "react";

function AllData (){
    const ctx = useContext(UserContext);
    return(
        <>
        <ContextCard.Consumer>
        <h1>all data</h1>
        {value => <pre>{JSON.stringify(ctx)}</pre>}
        <ContextCard/>
        </ContextCard.Consumer>
        </>
    )
}

export default AllData