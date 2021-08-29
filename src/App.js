import Game from "./pages/Game";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase";
import Loading from "./components/Loading";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;
  if (!user) return <HomePage />;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/puzzle">
            <Game />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
