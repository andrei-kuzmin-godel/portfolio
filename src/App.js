import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import Navigation from './components/navigation';

function App() {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path={`${baseUrl}`} exact component={Home}/>
          <Route path={`${baseUrl}/skills`} component={Skills}/>
          <Route path={`${baseUrl}/experience`} component={Experience}/>
          <Route path={`${baseUrl}/projects`} component={Projects}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
