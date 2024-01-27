import { useEffect, useState } from "react";
import { deleteMuseum } from "./services/museumServices";
import { useParams } from "react-router-dom";

export const MuseumDelete=()=>{
    const [museum, setMuseum] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        async function museumEliminate(){
            const resp = await deleteMuseum(id)
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