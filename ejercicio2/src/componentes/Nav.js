import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <nav>
            
                <Link to='/home'>
                    <p>Home</p>
                </Link>
                <Link to='/users'>
                    <p>Users</p>
                </Link>
                <Link to='/CreateUser'>
                    <p>Create User</p>
                </Link>
                <p>
                    <Link to='/about'>
                        About
                    </Link>
                </p>
                <p>
                    <Link to='/api'>
                        API
                    </Link>
                </p>
            
        </nav>
    )
}