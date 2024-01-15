import "./ButtonContainer.css";

const ButtonContainer = ({ onButtonClick }) => {
  let buttonContainer = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    "-",
    "*",
    "/",
    "=",
    "C",
  ];
  return (
    <>
      <div className="ButtonContainer">
        {buttonContainer.map((value, index) => {
          return (
            <button
              onClick={(e) => {
                onButtonClick(e);
              }}
              key={index}
              className="button"
            >
              {value}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default ButtonContainer;
