import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AnimateSharedLayout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
          </Switch>
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
