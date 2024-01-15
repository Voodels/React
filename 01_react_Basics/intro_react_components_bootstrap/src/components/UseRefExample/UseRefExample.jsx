import { useRef } from "react";

const UseRefExample = () => {
  const Ref = useRef(0);
  const Ref2 = useRef(null);
  const clickHandler = () => {
    Ref.current = Ref.current + 1;
    console.log(Ref.current);
    if (Ref.current === 5) {
      alert("5 reached");
    }
    console.log(Ref);
  };
  return (
    <div>
      <h1>UseRefExample 1</h1>

      <button onClick={clickHandler}>Click me</button>

      <div>
        <h1>UseRefExample 2</h1>
        <input type="text" ref={Ref2} />
        <button
          onClick={() => {
            Ref2.current.focus();
          }}
        >
          Focus on input
        </button>
      </div>

      {/* Refs can be passed as Props too  */}
    </div>
  );
};
export default UseRefExample;
