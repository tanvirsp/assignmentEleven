
import logo from "../assets/images/logo.png";

const Header = () => {
    const isLogin = false;

    return (
        <header>
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Projects</a>
                        {
                            isLogin ? <a className="btn-one" href="#">Logout</a>:  
                            <a className="btn-one" href="#">Login</a>
                        }
                       
                       
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;