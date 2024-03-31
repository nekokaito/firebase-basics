import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-center items-center gap-4 my-10">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/reg">Sign Up</NavLink>
        </div>
    );
};

export default Header;