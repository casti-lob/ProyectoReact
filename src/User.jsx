import React, { useEffect, useState } from "react";
import { getUser } from "./services/userService";
import { useParams } from "react-router-dom";

const DetailUser=()=>{
    const [user, setUser] = useState({name:'',age:'',email:'',password:''});
    const { id } = useParams();

    useEffect(()=>{
        const getUserComp = async ()=>{
            try{
                const resp = await getUser(id);
                setUser(resp.data)
            }catch(error){
                console.error("Error al obtener el usuario ",error);
            }
        }
        getUserComp();
    },[])

    return (
        <>
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Usuario {user.name}</h5>
                <p className="card-text">El usuario con la edad de  {user.age} llamado {user.name}  email:  {user.email} y password {user.password}.</p>
                
            </div>
            </div>
            </div>
        </>
    )
}

export default DetailUser
