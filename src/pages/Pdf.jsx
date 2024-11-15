import React, { forwardRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/VisualInspection.css";
import WindShield from "../components/vehicleDetails/WindShield";
import Hood from "../components/vehicleDetails/Hood";
import Grill from "../components/vehicleDetails/Grill";
import FrontBumper from "../components/vehicleDetails/FrontBumper";
import FrontLightings from "../components/vehicleDetails/FrontLightings";
import RearLightings from "../components/vehicleDetails/RearLightings";
import RearGlass from "../components/vehicleDetails/RearGlass";
import TailGate from "../components/vehicleDetails/TailGate";
import RearBumper from "../components/vehicleDetails/RearBumper";
import Spoiler from "../components/vehicleDetails/Spoiler";
import FrontFenderLHS from "../components/vehicleDetails/FrontFenderLHS";
import FrontDoorPassengerLHS from "../components/vehicleDetails/FrontDoorPassengerLHS";
import RearDoorLHS from "../components/vehicleDetails/RearDoorLHS";
import QuarterPanelLHS from "../components/vehicleDetails/QuarterPanelLHS";
import QuarterPanelRHS from "../components/vehicleDetails/QuarterPanelRHS";
import RearDoorRHS from "../components/vehicleDetails/RearDoorRHS";
import FrontDoorDriver from "../components/vehicleDetails/FrontDoorDriver";
import FrontFenderRHS from "../components/vehicleDetails/FrontFenderRHS";
import VehicleRoof from "../components/vehicleDetails/VehicleRoof";
import WheelArchFrontLHS from "../components/vehicleDetails/WheelArchFrontLHS";
import EngineCompartment from "../components/vehicleDetails/EngineCompartment";
import BootSpace from "../components/vehicleDetails/BootSpace";
import UnderCarriageView from "../components/vehicleDetails/UnderCarriageView";
import CheckWithEngineStart from "../components/vehicleDetails/CheckWithEngineStart";
import InteriorInspection from "../components/vehicleDetails/InteriorInspection";
import ScanningReport from "../components/vehicleDetails/ScanningReport";
import MainDataMonitorHybrid from "../components/vehicleDetails/MainDataMonitorHybrid";
import WarningIndicatorMain from "../components/vehicleDetails/WarningIndicatorMain";
import RoadTest from "../components/vehicleDetails/RoadTest";
import CoolingSystem from "../components/vehicleDetails/CoolingSystem";
import Suspension from "../components/vehicleDetails/Suspension";
import StartingDelay from "../components/vehicleDetails/StartingDelay";
import EngineMissIdling from "../components/vehicleDetails/EngineMissIdling";
import DocumentsRecords from "../components/vehicleDetails/DocumentsRecords";
import CustomerDetails from "../components/customersDetails/CustomerDetails";
import logo from "../../src/assets/images/greenlight logo.png";
import WheelArchFrontRHS from "../components/vehicleDetails/WheelArchFrontRHS";
import WheelArchRearLHS from "../components/vehicleDetails/WheelArchRearLHS";
import WheelArchRearRHS from "../components/vehicleDetails/WheelArchRearRHS";

const PDF = forwardRef((props, ref) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, []);

  // Get only the date part (YYYY-MM-DD)
  const formattedDate = currentDate.toISOString().split("T")[0];

  return (
    <>
      <div>
        <div className="navBar" style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <img src={logo} alt="Green Light Logo" className="logo" />
          <h1
            style={{
              textAlign: "center",
              color: "#accfa5",
              fontFamily: 'Poppins", sans-serif',
              paddingLeft: "3%",
              fontSize:'40px'
            }}
          >
            Final Report
          </h1>
          <h5
            style={{ color: "white", fontSize: "20px" }}
          >
            {formattedDate}
          </h5>
        </div>
        <CustomerDetails hideButtons={true} />
        <WindShield />
        <Hood />
        <Grill />
        <FrontBumper />
        <FrontLightings />
        <RearLightings />
        <RearGlass />
        <TailGate />
        <RearBumper />
        <Spoiler />
        <FrontFenderLHS />
        <FrontDoorPassengerLHS />
        <RearDoorLHS />
        <QuarterPanelLHS />
        <QuarterPanelRHS />
        <RearDoorRHS />
        <FrontDoorDriver />
        <FrontFenderRHS />
        <VehicleRoof />
        <WheelArchFrontLHS />
        <WheelArchFrontRHS />
        <WheelArchRearLHS />
        <WheelArchRearRHS />
        <EngineCompartment />
        <BootSpace />
        <UnderCarriageView />
        <CheckWithEngineStart />
        <InteriorInspection />
        <ScanningReport />
        <MainDataMonitorHybrid hideButtons={true} />
        <WarningIndicatorMain />
        <RoadTest hideButtons={true} />
        <DocumentsRecords />
        <CoolingSystem />
        <Suspension />
        <StartingDelay />
        <EngineMissIdling />   
      </div>
    </>
  );
});

export default PDF;
