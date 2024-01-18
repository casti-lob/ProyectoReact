import React, { useState, useEffect } from "react";
import { postMuseum } from "./services/museumServices";

const MuseumPost = ()=>{
    const [museum, setMuseum] = useState({name: "",
    country: "",
    price: "",
    category: "",});

    const formChange= (e)=>{
        setMuseum({
            ...museum,
            [e.target.name]: e.target.value
        });
    };

    const formSubmit = async (e)=>{
        e.preventDefault();
        if(museum.name && museum.category && museum.country && museum.price ){
            try{
                const resp = await postMuseum(museum)
                console.log(resp);
               
            }catch(error){
                console.error("Error",error);
            }
             //Limpiamos el formulario
            setMuseum({
                name: "",
                country: "",
                price: "",
                category: ""
            })
        }
    }
    

    return(
        <>
            <form onSubmit={formSubmit}>
                <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text"  id="name" name="name"
                value={museum.name}
                onChange={formChange}
                />
            </div>
            <div>
                <label htmlFor="country">País:</label>
                <input
                type="text"
                id="country"
                name="country"
                value={museum.country}
                onChange={formChange}
                />
            </div>
            <div>
                <label htmlFor="price">Precio:</label>
                <input
                type="text"
                id="price"
                name="price"
                value={museum.price}
                onChange={formChange}
                />
            </div>
            <div>
                <label >Categoría:</label>
                <select htmlFor="category" id="category" name="category" value={museum.category} onChange={formChange}>
                    <option value="Arte">Arte</option>
                    <option value="Historico">Historico</option>
                    <option value="Conceptual">Conceptual</option>
                </select>
               
            </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
};

export default MuseumPost