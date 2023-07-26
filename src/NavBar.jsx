import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth'
import useUser from "./Components/hooks/useUser";

export default function NavBar() {
    const { user } = useUser();
    const navigate  = useNavigate();
  return (
    <nav className="mt-2 d-flex justify-content-between">
        <ul className="d-flex justify-content-around list-unstyled w-100">
            <li>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><h5 className="btn px-5 mt-2">Home</h5></Link>
            </li>
            <li>
                <Link to="articles" style={{ color: 'inherit', textDecoration: 'none' }}><h5 className="btn px-5 mt-2">Articles</h5></Link>
            </li>
            <li>
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}><h5 className="btn px-5 mt-2">About</h5></Link>
            </li>
        </ul>
        <div className="w-25">
        {user?
        <button onClick={()=>{signOut(getAuth())}} className="btn btn-danger" >Log Out</button>
        :
        <button onClick={()=>{navigate('/login')}} className="btn btn-primary">Log In</button>
        }
        </div>
        <hr />
    </nav>
  )
}
