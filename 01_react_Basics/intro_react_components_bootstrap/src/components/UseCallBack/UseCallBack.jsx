import { useCallback } from "react";

const UseCallBack = () => {
  const state = 0;
  return (
    <div>
      <h1>UseCallback</h1>
      // useCallback is a hook that will return a memoized version of the
      callback function that only changes if one of the dependencies has
      changed. This is useful when passing callbacks to optimized child
      components that rely on reference equality to prevent unnecessary renders
      (e.g. shouldComponentUpdate).
    </div>
  );
};
export default UseCallBack;
