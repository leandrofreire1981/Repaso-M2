import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export default function UserDetail() {
    const params = useParams()
   
    const user = useSelector((state) => state.user[params.id-1])
    
    return(
        <>
            <p>Nombre: {user?.name}</p>
            <p>Apellido: {user?.lastname}</p>
            <p>Edad: {user?.age}</p>
            <p>Ciudad: {user?.city}</p>
        </>
    )
}