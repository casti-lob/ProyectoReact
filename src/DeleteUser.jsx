import { useEffect, useState } from "react";
import { deleteUser } from "./services/userService";
import { useParams } from "react-router-dom";

export const UserDelete=()=>{
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        async function userEliminate(){
            const resp = await deleteUser(id)
            setUser(resp.data)
        }
        userEliminate()
    },[])

    return(
        <>
        </>
    )
}

export default UserDelete