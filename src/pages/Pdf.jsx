import React from "react";
import WindShiled from "../components/vehicleDetails/WindShield";
import Boot from "../components/vehicleDetails/BootSpace";
import Roof from "../components/vehicleDetails/CheckWithEngineStart";

function PDF() {
  return (
    <>
      <h1 style={{textAlign:'center'}}>Report</h1>
      <WindShiled />
      <Boot />
      <Roof />
    </>
  );
}

export default PDF;
