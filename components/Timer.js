import React, { useState } from "react";

const Timer = () => {
  const [active, setActive] = useState("off");

  return (
    <div>
      <h1 className="select-none text-[3.052rem]">25:00</h1>
    </div>
  );
};

export default Timer;
