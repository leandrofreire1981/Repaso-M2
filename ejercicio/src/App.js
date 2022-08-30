import logo from './logo.svg';
import './App.css';
import Nav from './componentes/Nav';
import { Route } from 'react-router-dom';
import Home from './componentes/Home';
import CreateUser from './componentes/CreateUser';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path={'/createuser'}>
          <CreateUser />
        </Route>

    </div>
  );
}

export default App;
