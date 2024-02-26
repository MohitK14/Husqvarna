
import { Link } from "react-router-dom"

const Header= ()=>{
    return (
        <>
            <header className="App-header">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </ul>
            </header>
        </>
    )
}

export default Header;