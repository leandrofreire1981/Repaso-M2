import { useSelector } from "react-redux/es/exports"
import User from "./User"

export default function Users() {

    const users = useSelector(state => state.user)
   
    return (
        <>
            {
                users?.map((res, i) => (
                    <div key={i+1}>
                        <User id={i+1} name={res.name} lastname={res.lastname} age={res.age} city={res.city} />
                    </div>
                ))
            }
        </>
    )
}