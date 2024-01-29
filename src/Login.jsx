import React, { useState } from "react"
import { login } from "./services/userService"

const Login=() =>{
    const [name, setName]= useState('')
    const [password, setPassword]=useState('')

  

    const formSubmit = async (e)=>{
        e.preventDefault();
        if(name && password){
            console.log(name+" "+password);
            try {
                const resp = await login(name,password)  
            } catch (error) {
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
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="age">Password:</label>
                    <input type="text"  id="age" name="age"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                
                <button type="submit" className="btn btn-primary">Enviar</button>
             </form>
        </>
    )
}

export default Login