import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";


import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Singleitem from "./components/SingleItem/Singleitem";
function App({current}) {
   
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={Singleitem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps=(state)=>{
  return{
    current: state.shop.currentItem,
  }
}

export default connect(mapStateToProps)(App);
