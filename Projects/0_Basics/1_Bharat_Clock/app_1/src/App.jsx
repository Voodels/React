import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockText from "./components/ClockText";
import ClockTime from "./components/ClockTime";

function App() {
  return (
    <>
      <center
        style={{
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          gap: "1rem",
          margin: "0",
          padding: "0",
          fontFamily: "monospace",
        }}
      >
        <ClockHeading></ClockHeading>
        <ClockText></ClockText>
        <ClockTime></ClockTime>
      </center>
    </>
  );
}

export default App;
