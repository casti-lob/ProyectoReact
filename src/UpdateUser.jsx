import { useEffect, useState } from "react"
import { getUser, updateUser } from "./services/userService";
import { useParams } from "react-router-dom";

export const UserUpdate=()=>{
    const [user, setUser]= useState({
        name: "",
        age: 0,
        email: "",
        password: ""
        
    })
    const { id } = useParams();
    useEffect(()=>{
        async function getUserToUpdate(){
            try{
                const user = await getUser(id)
                setUser({
                    name: user.data.name,
                    age: user.data.age,
                    email:user.data.email,
                    password: user.data.email
             
                })
            }catch(error){
                console.error("Error",error);
            }
        }
        getUserToUpdate()
    },[])

    const formChange= (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const formSubmit = async (e)=>{
        e.preventDefault();
        if(user.name&& user.age>3 && user.age<101 && user.email && user.password){
            try{
                const resp = await updateUser(id,user)
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
                    value={user.name}
                    onChange={formChange}
                    />
                </div>

                <div>
                    <label htmlFor="age">Edad:</label>
                    <input type="number"  id="age" name="age"
                    value={user.age}
                    onChange={formChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email"  id="email" name="email"
                    value={user.email}
                    onChange={formChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password"  id="password" name="password"
                    value={user.password}
                    onChange={formChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
             </form>
        </>
    )
}

export default UserUpdate