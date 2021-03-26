import './style.css';

const Nav = () => {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <nav>
      <div className="logo">
        <h4>Andrei Kuzmin</h4>
      </div>
      <ul className="nav-links">
        <li><a href={`${baseUrl}/`}>Home</a></li>
        <li><a href={`${baseUrl}/work`}>Work</a></li>
        <li><a href={`${baseUrl}/about`}>About</a></li>
        <li><a href={`${baseUrl}/projects`}>Projects</a></li>
      </ul>
      <div className="burger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
