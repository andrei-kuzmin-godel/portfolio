import { Link } from 'react-router-dom';

import './index.css';

const Navigation = () => {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <header>
      <h1 className="logo">Andrei Kuzmin</h1>
      <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
      <nav>
        <ul>
          <Link to={`${baseUrl}`}>
            <li>Who am I?</li>
          </Link>
          <Link to={`${baseUrl}/skills`}>
            <li>Skills</li>
          </Link>
          <Link to={`${baseUrl}/experience`}>
            <li>Experience</li>
          </Link>
          <Link to={`${baseUrl}/projects`}>
            <li>Projects</li>
          </Link>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
};

export default Navigation;