import { Link } from "react-scroll";

function NavLink({ children, to, className }) {
    return (
        <li>
            <Link
                to={to}
                smooth={true}
                duration={400}
                activeClass={className}
                spy={true}
                offset={-150}
            >
                {children}
            </Link>
        </li>
    );
}

export default NavLink;
