import React, { useEffect, useState } from "react";
import { getMuseums } from "./services/museumServices";

const [museum, setMuseum] = useState(null);

useEffect(()=>{
    async function getMuseumsComp(){
        const museum = await getMuseums()
       
    }
    getMuseumsComp()
    return(
        <>
        </>
    )
},[]);

export default getMuseumsComponent