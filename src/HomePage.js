import Dashboard from "./Dashboard";
import { auth, provider, signInWithPopup, db } from "./Firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = () => {
  const history = useHistory();
  const [user] = useAuthState(auth);
  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
    if (user) {
      history.push("/puzzle");
    }
  };

  return (
    <div className="bg-shark bg-cover bg-center min-h-full min-w-full w-screen h-screen fixed top-0 left-0 grid place-items-center text-center">
      <p className="text-3xl font-extrabold text-blue-700">
        Welcome to SharkSaw Puzzle
      </p>
      <Dashboard />
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
