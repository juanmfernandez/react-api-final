import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Component } from 'react';
import Home from './pages/Home';
//import Post from './components/Post';
import AddPost from './pages/AddPost';
import Detalle from './pages/Detalle';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/addpost' component={AddPost} />
          <Route exact path='/detalle/:handle' component={Detalle} />
        </Switch>
      </BrowserRouter>
      //<Home />
      //<AddPost />
    );
  }
}

export default App;
