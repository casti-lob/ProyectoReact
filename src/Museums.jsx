import React, { useEffect, useState } from "react";
import { getMuseums } from "./services/museumServices";
import { Link } from 'react-router-dom';

const MuseumsList = ()=>{
    const [museums, setMuseum] = useState([]);

    useEffect(()=>{
        const getMuseumsComp = async () => {
            try{
                const resp = await getMuseums();
                setMuseum(resp.data)
            }catch(error){
                console.error("Error al obtener museos ",error);
            }
        };
        getMuseumsComp();
    },[])

    return (
        <>
            <h1 className="display-4">Lista de museos</h1>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Categoría</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">País</th>
                </tr>
            </thead>
            <tbody>
                {museums.map((museum)=>(
                    <tr key={museum._id}>
                        <td>{museum.category}</td>
                        <td>{museum.name}</td>
                        <td>{museum.price}</td>
                        <td>{museum.country}</td>
                        <td><Link to={`/museum/${museum._id}`}><button type="button" className="btn btn-info">Ver Detalle</button></Link></td>
                        <td><Link to={`/museumUpdate/${museum._id}`}><button type="button" className="btn btn-warning">Actualizar</button></Link></td>
                        <td><Link to={`/museumDelete/${museum._id}`}><button type="button" className="btn btn-danger">Eliminar</button></Link></td>

                        
                        

                    </tr>
                ))}
            
                
            </tbody>
            </table>
        </>
    )
}






export default MuseumsList