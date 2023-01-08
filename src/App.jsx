import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Contactme from "./Components/Contactme/Contactme";
import Projects from "./Components/Projects/Projects";

function App() {
  let location = useLocation();
  const [cardModal, setCardModal] = useState({
    card: 0,
    isActive: false,
  });

  return (
    <>
      <Layout cardModal={cardModal}>
        <Switch location={location} key={location.pathname}>
          <Route path="/sobremi">
            <AboutMe setCardModal={setCardModal} cardModal={cardModal} />
          </Route>
          <Route path="/proyectos">
            <Projects />
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
