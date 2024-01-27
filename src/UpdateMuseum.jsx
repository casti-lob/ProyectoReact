import { useEffect, useState } from "react"
import { getMuseum, updateMuseum } from "./services/museumServices";
import { useParams } from "react-router-dom";


export const MuseumUpdate=()=>{
    const [museum, setMuseum] = useState({name: "",
    country: "",
    price: "",
    category: "",});
    const { id } = useParams();

    
    
    useEffect(()=>{
        async function getMuseumToUpdate(){
            try{
                const museum = await getMuseum(id)
                setMuseum({
                    name: museum.data.name,
                    country: museum.data.country,
                    price: museum.data.price,
                    category: museum.data.category
                })
            }catch(error){
                console.error("Error",error);
            }
        }
        getMuseumToUpdate()
    },[])

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
                const resp = await updateMuseum(id,museum)
                console.log(resp);
               
            }catch(error){
                console.error("Error",error);
            }
            
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


}