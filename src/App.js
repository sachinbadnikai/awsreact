import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
// import EditProduct from "./components/EditProduct";
 
function App() {
  return (
    // <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
            {/* <Route exact path="/">
              <ProductList />
            </Route> */}
              <AddProduct />

            {/* <Route path="/edit/:id">
              <EditProduct />
            </Route> */}
        </div>
      </div>
    </div>
    /* </Router> */
  );
}
 
export default App;