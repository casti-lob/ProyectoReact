import React, { useState, useEffect } from "react";
import { postUser } from "./services/userService";

const UserPost=()=>{
    const [user, setUser]= useState({
        name: "",
        age: 0,
        email: "",
        password: ""
    })
    const formChange =(e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const formSubmit = async (e)=>{
        e.preventDefault();
        if(user.name&& user.age>3 && user.age<101 && user.email && user.password){
            try{
                const resp = await postUser(user)
                console.log(resp);
               
            }catch(error){
                console.error("Error",error);
            }
            //Limpiamos el formulario
            setUser({
                name: "",
                age: 0,
                email: "",
                password: ""
            })
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
export default UserPost