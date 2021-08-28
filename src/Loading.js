import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="./shark.png"
          alt="chatware"
          style={{ marginBottom: 50 }}
          height="200"
          width="200"
        />
        <Circle color="skyblue" size={60} />
      </div>
    </center>
  );
};

export default Loading;
