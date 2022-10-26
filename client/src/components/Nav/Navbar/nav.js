import 'bulma/css/bulma.min.css';

export default funciton Nav() {
    return (
<nav className="nav">
    <a href="Home" className="site-name">Roll With It</a>
    <ul>
        <li> 
        <a href="/login">Login</a>
        </li>
        <li>
        <a href="/signup">Sign Up</a>
        </li>
    </ul>
    </nav>

    )
}