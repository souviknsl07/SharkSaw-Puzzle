import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import Counter from "../components/Counter";
import { auth, db } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";

const Game = ({ setPlayerInfo }) => {
  const [isActive, setIsActive] = useState(false);
  const [user] = useAuthState(auth);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");

  const solved = async () => {
    setIsActive(!isActive);
    setDoc(
      doc(db, "players", user.uid),
      {
        time: Number(minute) + Number(second),
        minute: minute,
        second: second,
      },
      { merge: true }
    );

    await setDoc(doc(db, "players", user.uid), {
      name: user.displayName,
      time: Number(minute) + Number(second),
      minute: minute,
      second: second,
    });
  };

  return (
    <div className="">
      <div className="flex  items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/7205612/pexels-photo-7205612.jpeg"
            alt="reference"
            height="200"
            width="300"
          />

          <h1 className="hidden sm:flex text-2xl font-mono uppercase mr-5">
            <img
              src="https://thumbs.dreamstime.com/b/shark-cartoon-vector-illustration-funny-friendly-mascot-60018832.jpg"
              height="50"
              width="50"
              alt="shark"
            />{" "}
            Solved Image
          </h1>
        </div>
        <div className="sm:mr-5">
          <h4 className="md:text-lg mb-2 font-bold">{user.displayName}</h4>
          <Counter
            isActive={isActive}
            second={second}
            setSecond={setSecond}
            minute={minute}
            setMinute={setMinute}
            setPlayerInfo={setPlayerInfo}
          />
        </div>
      </div>

      <hr />
      <div className={!isActive && "grid place-items-center mt-48"}>
        {isActive ? (
          <div className="sm:mb-5">
            <JigsawPuzzle
              imageSrc="https://images.pexels.com/photos/7205612/pexels-photo-7205612.jpeg"
              rows={4}
              columns={5}
              onSolved={solved}
            />
          </div>
        ) : (
          <button
            className="p-3 font-medium border-none focus:outline-none bg-blue-200 hover:bg-blue-300 rounded-md text-sm items-center flex"
            onClick={() => setIsActive(!isActive)}
          >
            Start Here
          </button>
        )}
      </div>
    </div>
  );
};

export default Game;
