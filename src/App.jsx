import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Contactme from "./Components/Contactme/Contactme";

function App() {
  let location = useLocation();

  return (
    <>
      <Layout>
        <Switch location={location} key={location.pathname}>
          <Route path="/sobremi">
            <AboutMe />
          </Route>
          <Route path="/proyectos">
            <h1>Proyectos</h1>
          </Route>
          <Route path="/contactame">
            <Contactme />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
