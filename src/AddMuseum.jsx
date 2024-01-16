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

    const formSubmit = (e)=>{
        e.preventDefault();
    }

    useEffect(()=>{
        const museumSubmit = async ()=>{
            try{
                const resp = await postMuseum(museum)
                console.log(resp);
                //Limpiamos el formulario
                setMuseum({
                    name: "",
                    country: "",
                    price: "",
                    category: ""
                })
            }catch(error){
                console.error("Error",error);
            }
        }

        if(museum.name && museum.category && museum.country && museum.price ){
            museumSubmit()
        }
    },[formSubmit])

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
                <label htmlFor="category">Categoría:</label>
                <input
                type="text"
                id="category"
                name="category"
                value={museum.category}
                onChange={formChange}
                />
            </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
};

export default MuseumPost