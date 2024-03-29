import React, { useEffect, useState } from "react";
import { getMuseum } from "./services/museumServices";
import { useParams } from "react-router-dom";

const DetailMuseum = ()=>{
    const [museum, setMuseum] = useState({name:'',country:'',price:'',category:''});
    const { id } = useParams();

    useEffect(()=>{
        const getMuseumComp = async () => {
            try{
                const resp = await getMuseum(id);
                setMuseum(resp.data)
            }catch(error){
                console.error("Error al obtener museos ",error);
            }
        };
        getMuseumComp();
    },[])

    return (
        <>
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Museo {museum.name}</h5>
                <p className="card-text">El museo de la categoria de {museum.category} llamado {museum.name} y que tienes que visitar {museum.country} y pagar {museum.price}€.</p>
                <a href="#" className="btn btn-primary">Visitar</a>
            </div>
            </div>
            </div>
        </>
    )
}






export default DetailMuseum