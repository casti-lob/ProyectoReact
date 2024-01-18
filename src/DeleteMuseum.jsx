import { useEffect, useState } from "react";
import { deleteMuseum } from "./services/museumServices";

export const MuseumDelete=()=>{
    const [museum, setMuseum] = useState(null);
    useEffect(()=>{
        async function museumEliminate(){
            const resp = await deleteMuseum("65a9090e39bb94bb834e67ea")
            setMuseum(resp.data)
            console.log("Museo eliminado: "+museum);
        }
        museumEliminate()
    },[])

    return(
        <>
        </>
    )
}