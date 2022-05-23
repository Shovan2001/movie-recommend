import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import { useSelector} from "react-redux";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import {
  selectUserName,
  // selectUserEmail,
  // selectUserPhoto,
  // setUserLoginDetailser,
} from "./Slice/userSlice";

function App() {
  const userName = useSelector(selectUserName);
  return (
    
      
      <Router>
      {userName && <Header />}

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    // {/* </GlobalProvider> */}
  );
}

export default App;