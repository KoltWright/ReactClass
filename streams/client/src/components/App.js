import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <Link to="/pagetwo">PageOne</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click me</button>
      <Link to="/">to page two</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
