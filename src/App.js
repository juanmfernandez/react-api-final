import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Component } from 'react';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import Detalle from './pages/Detalle';
import Categoria from './pages/Categoria';
import Plataforma from './pages/Plataforma';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/addpost' component={AddPost} />
          <Route exact path='/detalle/:handle' component={Detalle} />
          <Route exact path='/categoria/:handle' component={Categoria} />
          <Route exact path='/plataforma/:handle'component={Plataforma} />
        </Switch>
     </BrowserRouter> 
    );
  }
}

export default App;
