import { useDispatch, useSelector } from "react-redux/es/exports"
import { write } from "../actions/files"
import User from "./User"
import { useEffect, useState } from "react";
import { deleteUser } from '../actions/Index'


export default function Users() {

    const users = useSelector(state => state.user)

    const [estado, setEstado ] = useState(false)

    useEffect(() => setEstado(false),[estado])

    const dispatch = useDispatch()

    function onClose(id) {
      
        dispatch(deleteUser(id))
      setEstado(true)
      
    }


    function handleClick(e) {
        let archivo = ''
       
        if (users.length>0) {
            for (let i=0; i<users.length; i++) 
                    archivo += `${users[i].name} ${users[i].lastname} ${users[i].age} ${users[i].city} \n`
            write(archivo)
        }
    }
   
    return (
        <>
            {
                users?.map((res, i) => (
                    <div key={i+1}>
                        <User id={i+1} name={res.name} lastname={res.lastname} age={res.age} city={res.city} />
                        <button onClick={() => onClose(i)}>x</button>
                    </div>
                ))
            }
            <button onClick={handleClick}>Guardar en Archivo</button>
        </>
    )
}


