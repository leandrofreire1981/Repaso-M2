import { useSelector } from "react-redux"
import PostApi from "./PostApi"




export default function Apis() {

        const user = useSelector(state => state.detail)
        
        
        
        return (
        <div>
              {user.results?.map((res, i) => (
                <PostApi key={i} user={res} />
              ))}
                      

        </div>
     )
}