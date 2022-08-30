import './App.css';
import Nav from './componentes/Nav';
import { Route } from 'react-router-dom';
import Home from './componentes/Home';
import CreateUser from './componentes/CreateUser';
import Users from './componentes/Users';
import UserDetail from './componentes/UserDetalil';
import About from './componentes/About';


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
        <Route exact path='/users'>
          <Users />
        </Route>
        <Route exact path={'/users/detail/:id'}>
          <UserDetail />
        </Route>
        <Route exact path='/about' component={About} />
    </div>
  );
}

export default App;
