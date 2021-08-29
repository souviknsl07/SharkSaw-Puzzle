import Dashboard from "../components/Dashboard";
import { auth, provider, signInWithPopup, db } from "../Firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Music from "../components/Music";

const HomePage = () => {
  const history = useHistory();
  const [user] = useAuthState(auth);
  const [players, setPlayers] = useState([]);
  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };
  if (user) {
    history.push("/puzzle");
  }

  useEffect(() => {
    const q = query(collection(db, "players"), orderBy("time", "asc"));
    onSnapshot(q, (querySnapshot) => {
      setPlayers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  console.log(players);

  return (
    <div className="bg-shark bg-cover bg-center min-h-full min-w-full w-screen h-screen grid place-items-center text-center bg-opacity-50">
      <div className="flex  items-center mt-10">
        <p className="text-3xl sm:mr-2 font-extrabold text-red-700">
          Welcome to SharkSaw Puzzle
        </p>
        <Music />
      </div>
      <Dashboard players={players} />
      <button
        className="p-3 font-medium border-none focus:outline-none bg-gray-200 hover:bg-gray-300 rounded-md text-sm items-center flex"
        onClick={signIn}
      >
        Log In to Play
      </button>
    </div>
  );
};

export default HomePage;
