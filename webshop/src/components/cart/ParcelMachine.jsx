import React, { useState, useEffect } from "react";

function ParcelMachine() {
  const [parcelMachines, setParchelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then((res) => res.json())
      .then((json) => setParchelMachines(json));
  }, []);

  return (
    <select>
      {parcelMachines
        .filter((pm) => pm.NAME !== "1. eelistus Omnivas")
        .filter((pm) => pm.A0_NAME === "EE")
        // .sort((a,b) =>a.ZIP.localeCompare(b.ZIP))
        .map((pm) => (
          <option key={pm.NAME}>{pm.NAME}</option>
        ))}
    </select>
  );
}

export default ParcelMachine;
