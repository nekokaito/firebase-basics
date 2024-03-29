import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-center items-center gap-4 my-10">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Header;