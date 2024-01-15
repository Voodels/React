import React, { useEffect, useState } from "react";

const ClockTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>
        Current time is{" "}
        {time.toLocaleTimeString("en-US", {
          hour: "numeric",

          // hour12: true,
          minute: "numeric",
          second: "numeric",
        })}
      </p>
    </div>
  );
};
export default ClockTime;
