import './index.css';

const Navigation = () => {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <header>
      <h1 className="logo">Andrei Kuzmin</h1>
      <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
      <nav>
        <ul>
        <li><a href={`${baseUrl}/`}>Home</a></li>
        <li><a href={`${baseUrl}/work`}>Work</a></li>
        <li><a href={`${baseUrl}/about`}>About</a></li>
        <li><a href={`${baseUrl}/projects`}>Projects</a></li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Navigation;