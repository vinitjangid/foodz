import logo from './logo.svg';
import {Fragment, useState} from 'react';
import './App.css';
import Toolbar from './Components/toolbar';
import Content from './Pages/mainContent';
import Footer from './Components/footer';
import Restaurant from './Pages/Restaurant';
import Menu from './Pages/MenuPage';
import OrderHistory from './Pages/OrderHistory';
import {BrowserRouter as Router,Switch, Route,Link } from 'react-router-dom';
function App(props) { 
  return (
    <Router>
      <div className="ecart-Background">
        <Switch>
              <Route path="/" exact strict component={Content}></Route>
               <Route path="/restaurant" exact strict component={Restaurant}></Route>
               <Route path="/menu" exact strict component={Menu}></Route>
               <Route path="/history" exact strict component={OrderHistory}></Route>
              <Route render={()=><h1>No match found</h1>}></Route>
        </Switch>
        {/* <Content/> */}
        <Footer/>
      </div>
    </Router>
  );
}
export default App;