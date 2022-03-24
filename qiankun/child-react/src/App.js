import './App.css';
import { Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__?'/app-react':''}>
      <div>
     <NavLink to="/" activeClassName='active-menu'>
         <span>首页</span>
     </NavLink>
     <NavLink to="/about" activeClassName='active-menu'>
         <span>关于</span>
     </NavLink>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
