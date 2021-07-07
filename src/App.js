import { Provider } from "react-redux";
import store from "./redux/store";
import { Search } from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import CardRepository from "./pages/CardRepository";


function App() {
  return (
    <Provider store={store}>
       <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/card/:id">
            <CardRepository />
          </Route>          
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
