import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "../../assets/scss/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CustomerDetails from "../customersDetails/CustomerDetails";
import WindShield from "../vehicleDetails/WindShield";
import Hood from "../vehicleDetails/Hood";
import Grill from "../vehicleDetails/Grill";
import FrontBumper from "../vehicleDetails/FrontBumper";
import FrontLightings from "../vehicleDetails/FrontLightings";
import RearLightings from "../vehicleDetails/RearLightings";
import RearGlass from "../vehicleDetails/RearGlass";
import TailGate from "../vehicleDetails/TailGate";
import RearBumper from "../vehicleDetails/RearBumper";
import Spoiler from "../vehicleDetails/Spoiler";
import FrontFenderLHS from "../vehicleDetails/FrontFenderLHS";
import FrontDoorPassengerLHS from "../vehicleDetails/FrontDoorPassengerLHS";
import RearDoorLHS from "../vehicleDetails/RearDoorLHS";
import QuarterPanelLHS from "../vehicleDetails/QuarterPanelLHS";
import QuarterPanelRHS from "../vehicleDetails/QuarterPanelRHS";
import RearDoorRHS from "../vehicleDetails/RearDoorRHS";
import FrontDoorDriver from "../vehicleDetails/FrontDoorDriver";
import FrontFenderRHS from "../vehicleDetails/FrontFenderRHS";
import VehicleRoof from "../vehicleDetails/VehicleRoof";
import WheelArchFrontLHS from "../vehicleDetails/WheelArchFrontLHS";
import WheelArchFrontRHS from "../vehicleDetails/WheelArchFrontRHS";
import WheelArchRearLHS from "../vehicleDetails/WheelArchRearLHS";
import WheelArchRearRHS from "../vehicleDetails/WheelArchRearRHS";
import EngineCompartment from "../vehicleDetails/EngineCompartment";
import BootSpace from "../vehicleDetails/BootSpace";
import UnderCarriageView from "../vehicleDetails/UnderCarriageView";
import CheckWithEngineStart from "../vehicleDetails/CheckWithEngineStart";
import InteriorInspection from "../vehicleDetails/InteriorInspection";
import ScanningReport from "../vehicleDetails/ScanningReport";
import MainDataMonitorHybrid from "../vehicleDetails/MainDataMonitorHybrid";
import WarningIndicatorMain from "../vehicleDetails/WarningIndicatorMain";
import RoadTest from "../vehicleDetails/RoadTest";
import CoolingSystem from "../vehicleDetails/CoolingSystem";
import Suspension from "../vehicleDetails/Suspension";
import StartingDelay from "../vehicleDetails/StartingDelay";
import EngineMissIdling from "../vehicleDetails/EngineMissIdling";
import DocumentsRecords from "../vehicleDetails/DocumentsRecords";

function SidebarComp() {
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(0);

  const menuItems = [
    "Customer Details",
    "Wind Shield",
    "Hood",
    "Grill",
    "Front Bumper",
    "Front Lightings",
    "Rear Lightings",
    "Rear Glass",
    "Tail Gate",
    "Rear Bumper",
    "Spoiler",
    "Front Fender LHS",
    "Front Door Passenger LHS",
    "Rear Door LHS",
    "Quarter Panel LHS",
    "Quarter Panel RHS",
    "Rear Door RHS",
    "Front Door Driver",
    "Front Fender RHS",
    "Vehicle Roof",
    "Wheel Arch Front LHS",
    "Wheel Arch Front RHS",
    "Wheel Arch Rear LHS",
    "Wheel Arch Rear RHS",
    "Engine Compartment",
    "Boot Space",
    "Under Carriage View",
    "Check With Engine Start",
    "Interior Inspection",
    "Scanning Report",
    "Main Data Monitor Hybrid",
    "Warning Indicator Main",
    "Road Test",
    "Documents Records",
    "Cooling System",
    "Suspension",
    "Starting Delay",
    "Engine Miss Idling",
  ];

  const handleMenuItemClick = (menuItemIndex) => {
    setSelectedMenuItemIndex(menuItemIndex);
  };

  const handleNextButtonClick = () => {
    // Increment the selectedMenuItemIndex, but make sure it stays within bounds
    setSelectedMenuItemIndex((prevIndex) =>
      prevIndex < menuItems.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePreviousButtonClick = () => {
    // Decrement the selectedMenuItemIndex, but make sure it stays within bounds
    setSelectedMenuItemIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const renderComponent = () => {
    const selectedMenuItem = menuItems[selectedMenuItemIndex];

    switch (selectedMenuItem) {
      case "Customer Details":
        return <CustomerDetails />;
      case "Wind Shield":
        return <WindShield />;
      case "Hood":
        return <Hood />;
      case "Grill":
        return <Grill />;
      case "Front Bumper":
        return <FrontBumper />;
      case "Front Lightings":
        return <FrontLightings />;
      case "Rear Lightings":
        return <RearLightings />;
      case "Rear Glass":
        return <RearGlass />;
      case "Tail Gate":
        return <TailGate />;
      case "Rear Bumper":
        return <RearBumper />;
      case "Spoiler":
        return <Spoiler />;
      case "Front Fender LHS":
        return <FrontFenderLHS />;
      case "Front Door Passenger LHS":
        return <FrontDoorPassengerLHS />;
      case "Rear Door LHS":
        return <RearDoorLHS />;
      case "Quarter Panel LHS":
        return <QuarterPanelLHS />;
      case "Quarter Panel RHS":
        return <QuarterPanelRHS />;
      case "Rear Door RHS":
        return <RearDoorRHS />;
      case "Front Door Driver":
        return <FrontDoorDriver />;
      case "Front Fender RHS":
        return <FrontFenderRHS />;
      case "Vehicle Roof":
        return <VehicleRoof />;
      case "Wheel Arch Front LHS":
        return <WheelArchFrontLHS />;
      case "Wheel Arch Front RHS":
        return <WheelArchFrontRHS />;
      case "Wheel Arch Rear LHS":
        return <WheelArchRearLHS />;
      case "Wheel Arch Rear RHS":
        return <WheelArchRearRHS />;
      case "Engine Compartment":
        return <EngineCompartment />;
      case "Boot Space":
        return <BootSpace />;
      case "Under Carriage View":
        return <UnderCarriageView />;
      case "Check With Engine Start":
        return <CheckWithEngineStart />;
      case "Interior Inspection":
        return <InteriorInspection />;
      case "Scanning Report":
        return <ScanningReport />;
      case "Main Data Monitor Hybrid":
        return <MainDataMonitorHybrid />;
      case "Warning Indicator Main":
        return <WarningIndicatorMain />;
      case "Road Test":
        return <RoadTest />;
      case "Documents Records":
        return <DocumentsRecords />;
      case "Cooling System":
        return <CoolingSystem />;
      case "Suspension":
        return <Suspension />;
      case "Starting Delay":
        return <StartingDelay />;
      case "Engine Miss Idling":
        return <EngineMissIdling />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content">
          <Sidebar className="sidebar" width="250px" transitionDuration={500}>
            <Menu>
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  key={menuItem}
                  className={
                    selectedMenuItemIndex === index
                      ? "selected-menu-item"
                      : "notselected-menu-item"
                  }
                  onClick={() => handleMenuItemClick(index)}
                >
                  {menuItem === "hood" ? "Hood / Bonat" : menuItem}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="sidebar-btns">
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={handlePreviousButtonClick}
              className="sidebar-btn"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={handleNextButtonClick}
              className="sidebar-btn"
            />
          </div>
        </div>
        <div className="content-container">
          <div>{renderComponent()}</div>
        </div>
      </div>
    </>
  );
}

export default SidebarComp;
