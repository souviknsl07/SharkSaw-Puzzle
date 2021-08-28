import Game from "./Game";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./Firebase";
import Loading from "./Loading";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [user, loading] = useAuthState(auth);
  const [players, setPlayers] = useState([
    { name: "", minute: "", second: "" },
  ]);

  // const setPlayerInfo = async () => {
  //   const querySnapshot = getDocs(collection(db, "players"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });

  //   auth.signOut();
  // };

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
            <HomePage players={players} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
