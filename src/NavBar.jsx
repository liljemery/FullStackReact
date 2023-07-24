import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="mt-2">
        <ul className="d-flex justify-content-around list-unstyled">
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
        <hr />
    </nav>
  )
}
