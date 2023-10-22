import React, { forwardRef } from "react";
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

const PDF = forwardRef((props, ref) => {
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "#063c37",
            color: "#accfa5",
            fontFamily: 'Poppins", sans-serif',
            padding: '5px',
          }}
        >
          Final Report
        </h1>
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
        <EngineCompartment />
        <BootSpace />
        <UnderCarriageView />
        <CheckWithEngineStart />
        <InteriorInspection />
        <ScanningReport />
        <MainDataMonitorHybrid />
        <WarningIndicatorMain />
        <RoadTest />
        <CoolingSystem />
        <Suspension />
        <StartingDelay />
        <EngineMissIdling />
        <DocumentsRecords />
      </div>
    </>
  );
});

export default PDF;
