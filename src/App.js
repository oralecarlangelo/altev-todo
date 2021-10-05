import React from "react";
import { Route, Switch } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Switch>
        <Route
          path="/contact"
          render={(props) => {
            const x = 1 + 1;
            return <div>Render {x}</div>;
          }}
        />
        <Route path="/" component={Todo} />
      </Switch>
    </div>
  );
}

export default App;
