import './style.css';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h4>Andrei Kuzmin</h4>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
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
