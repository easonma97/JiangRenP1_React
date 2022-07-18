import './Nav.css';

const Nav = (
    {href, children}
) => {
    return(<li className="right-nav">
        <a href={href}>{children}</a>
    </li>);
}

export default Nav;