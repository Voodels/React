import "./Display.css";
const Display = ({ val }) => {
  return (
    <>
      <input type="text" className="Display" value={val} readOnly />
    </>
  );
};
export default Display;
