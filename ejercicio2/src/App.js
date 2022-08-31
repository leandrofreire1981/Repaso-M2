import './App.css';
import Nav from './componentes/Nav';
import { Route } from 'react-router-dom';
import Home from './componentes/Home';
import CreateUser from './componentes/CreateUser';
import Users from './componentes/Users';
import UserDetail from './componentes/UserDetalil';
import About from './componentes/About';
import Apis from './componentes/Apis';
import { useDispatch } from 'react-redux';
import { getUserApi } from './actions/Index';


function App() {

  const dispatch = useDispatch()

  dispatch(getUserApi())
 
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
        <Route exact path='/api'>
          <Apis/>
        </Route>
        <Route exact path='/about' component={About} />
    </div>
  );
}

export default App;
