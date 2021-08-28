import { useEffect, useState } from "react";
import { auth } from "./Firebase";

const Counter = ({
  isActive,
  minute,
  second,
  setSecond,
  setMinute,
  setPlayerInfo,
}) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  return (
    <div className="md:text-xl">
      <div className="time mb-3">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons mr-5">
        <button
          onClick={() => auth.signOut()}
          className="p-3 font-medium border-none focus:outline-none bg-blue-200 hover:bg-blue-300 rounded-md text-sm items-center flex"
        >
          Quit
        </button>
      </div>
    </div>
  );
};

export default Counter;
//reffered -> https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
