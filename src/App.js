import React from "react";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/articles">
          <Layout>
            <Article />
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
