import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <nav>
            <ul>
                <Link to='/home'>
                    <li>Home</li>
                </Link>
                <Link to='/users'>
                    <li>Users</li>
                </Link>
                <Link to='/CreateUser'>
                    <li>Create User</li>
                </Link>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}