import React, { useEffect, useState } from "react";
import { getMuseumsVisiteds } from "./services/museumsVisiteds";
import { useParams } from "react-router-dom";

const MuseumsVisiteds=()=>{
    const [visited, setVisited]= useState([])
    const { idUser } = useParams();

    useEffect(()=>{
        const getMuseumsVisitedByTheUser = async()=>{
            try{
                const resp = await getMuseumsVisiteds();
                const filteredMuseumsVisited = resp.data.filter(museum => museum.idUser === idUser);

                setVisited(filteredMuseumsVisited)
            }catch(error){
                console.error("Error: ",error);
            }
            
        }
        getMuseumsVisitedByTheUser()
    },[])

    return (
        <>
            <h1 className="display-4">Lista de museos</h1>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Museo</th>
                <th scope="col">Valoración</th>
                <th scope="col">Comentario</th>
                </tr>
            </thead>
            <tbody>
                {visited.map((vi)=>(
                    <tr key={vi._id}>
                        <td>{vi.idUser}</td>
                        <td>{vi.idMuseum}</td>
                        <td>{vi.valuation}</td>
                        <td>{vi.comentary}</td>

                        
                        

                    </tr>
                ))}
            
                
            </tbody>
            </table>
        </>
    )
}

export default MuseumsVisiteds