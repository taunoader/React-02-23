import React from "react";
import { useState } from "react";

function Random() {
  const [random, uuendaRandom] = useState([
    "shoes",
    "shirts",
    "socks",
    "sweaters",
    "pigs",
    "goats",
    "sheep",
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
    "March",
    "Jan",
    "Feb",
    "Dec",
  ]);

  const randomList = random.map((random, index) => {
    return <li key={index}>{random}<button>x</button></li>;
  });

  return (
    <div>
      <div>length:{random.length}</div>
      <ul>{randomList}</ul>
    </div>
  );
}

export default Random;
