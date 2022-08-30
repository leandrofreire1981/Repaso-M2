import { Link } from "react-router-dom";

export default function User(props) {

    return (
        <div>
            <h3>
                <Link to={`/users/detail/${props.id}`} >
                    {props?.name} {props?.lastname}
                </Link>
            </h3>

        </div>
    )
}