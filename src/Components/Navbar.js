import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className="navbar">
            <Link to="/"><h1>World Countries DataBase</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Travel Plans</Link>
                <Link className='new' to="/create">New Country</Link>
            </div>
        </nav>
    );
}

export default Navbar;
