import React, { useEffect, useState } from "react";
import{getUsers} from "./services/userService"
import { Link } from 'react-router-dom';

const UserList = ()=>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const getUsersComp = async ()=>{
            try{
                const resp = await getUsers()
                setUsers(resp.data)
            }catch(error){
                console.error("Error al obtener a los usuarios ",error);

            }
        };
        getUsersComp();
    },[])
    return(
<>
            <h1 className="display-4">Lista de usuarios</h1>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Edad</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                   <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        
                         
                        <td><Link to={`/user/${user._id}`}><button type="button" className="btn btn-info">Ver Detalle</button></Link></td>
                        <td><Link to={`/museumsVisited/${user._id}`}><button type="button" className="btn btn-primary">Ver Museos visitados</button></Link></td>
                        <td><Link to={`/userUpdate/${user._id}`}><button type="button" className="btn btn-warning">Actualizar</button></Link></td>
                        <td><Link to={`/userDelete/${user._id}`}><button type="button" className="btn btn-danger">Eliminar</button></Link></td>

                       
                        

                    </tr>
                ))}
            
                
            </tbody>
            </table>
        </>
        )
}



export default UserList