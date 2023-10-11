import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import '../../assets/scss/Sidebar.css';
import WindShield from '../vehicleDetails/WindShield';
import Hood from '../vehicleDetails/Hood';
import Grill from '../vehicleDetails/Grill';
import FrontBumper from '../vehicleDetails/FrontBumper';
import FrontLightings from '../vehicleDetails/FrontLightings';
import RearLightings from '../vehicleDetails/RearLightings';
import TailGate from '../vehicleDetails/TailGate';
import RearBumper from '../vehicleDetails/RearBumper';
import Spoiler from '../vehicleDetails/Spoiler';
import RearGlass from '../vehicleDetails/RearGlass';
import FrontFenderLHS from '../vehicleDetails/FrontFenderLHS';
import FrontDoorPassengerLHS from '../vehicleDetails/FrontDoorPassengerLHS';
import RearDoorLHS from '../vehicleDetails/RearDoorLHS';
import QuarterPanelLHS from '../vehicleDetails/QuarterPanelLHS';
import RearDoorRHS from '../vehicleDetails/RearDoorRHS';
import FrontDoorDriver from '../vehicleDetails/FrontDoorDriver';
import FrontFenderRHS from '../vehicleDetails/FrontFenderRHS';
import VehicleRoof from '../vehicleDetails/VehicleRoof';
import WheelArchFrontLHS from '../vehicleDetails/WheelArchFrontLHS';
import EngineCompartment from '../vehicleDetails/EngineCompartment';
import BootSpace from '../vehicleDetails/BootSpace';
import UnderCarriageView from '../vehicleDetails/UnderCarriageView';
import CheckWithEngineStart from '../vehicleDetails/CheckWithEngineStart';
import InteriorInspection from '../vehicleDetails/InteriorInspection';
import ScanningReport from '../vehicleDetails/ScanningReport';
import MainDataMonitorHybrid from '../vehicleDetails/MainDataMonitorHybrid';
import WarningIndicatorMain from '../vehicleDetails/WarningIndicatorMain';
import RoadTest from '../vehicleDetails/RoadTest';
import QuarterPanelRHS from '../vehicleDetails/QuarterPanelRHS';
import CoolingSystem from '../vehicleDetails/CoolingSystem';
import Suspension from '../vehicleDetails/Suspension';
import StartingDelay from '../vehicleDetails/StartingDelay';
import EngineMissIdling from '../vehicleDetails/EngineMissIdling';
import DocumentsRecords from '../vehicleDetails/DocumentsRecords';

function SidebarComp() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('windShield'); // Default selection

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };


  const renderComponent = () => {
    switch (selectedMenuItem) {
      case 'windShield':
        return <WindShield />;
      case 'hood':
        return <Hood />;
      case 'grill':
        return <Grill />;
      case 'frontBumper':
        return <FrontBumper />;
      case 'frontLightings':
        return <FrontLightings />;
      case 'rearLightings':
        return <RearLightings />;
      case 'rearGlass':
        return <RearGlass/>;
      case 'tailGate':
        return <TailGate />;
      case 'rearBumper':
        return <RearBumper />;
      case 'spoiler':
        return <Spoiler />;
      case 'frontFenderLHS':
        return <FrontFenderLHS />;
      case 'frontDoorPassengerLHS':
        return <FrontDoorPassengerLHS />;
      case 'rearDoorLHS':
        return <RearDoorLHS />;
      case 'quarterPanelLHS':
        return <QuarterPanelLHS />;
      case 'quarterPanelRHS':
        return <QuarterPanelRHS />;
      case 'rearDoorRHS':
        return <RearDoorRHS />;
      case 'frontDoorDriver':
        return <FrontDoorDriver />;
      case 'frontFenderRHS':
        return <FrontFenderRHS />;
      case 'vehicleRoof':
        return <VehicleRoof />;
      case 'wheelArchFrontLHS':
        return <WheelArchFrontLHS />;
      case 'engineCompartment':
        return <EngineCompartment />;
      case 'bootSpace':
        return <BootSpace />;
      case 'underCarriageView':
        return <UnderCarriageView />;
      case 'checkWithEngineStart':
        return <CheckWithEngineStart />;
      case 'interiorInspection':
        return <InteriorInspection />;
      case 'scanningReport':
        return <ScanningReport />;
      case 'mainDataMonitorHybrid':
        return <MainDataMonitorHybrid />;
      case 'warningIndicatorMain':
        return <WarningIndicatorMain />;
      case 'roadTest':
        return <RoadTest />;
      case 'coolingSystem':
        return <CoolingSystem />;
      case 'suspension':
        return <Suspension />;
      case 'startingDelay':
        return <StartingDelay />;
      case 'engineMissIdling':
        return <EngineMissIdling />;
      case 'documentsRecords':
        return <DocumentsRecords />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="home-container">
        <Sidebar width='250px' collapsedWidth="80px" transitionDuration={500} backgroundColor="#ffffff">
          <Menu>
            <MenuItem className={selectedMenuItem === 'windShield' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('windShield')}>
              Wind Shield
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'hood' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('hood')}>
              Hood / Bonat
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'grill' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('grill')}>
              Grill
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'frontBumper' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('frontBumper')}>
              Front Bumper
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'frontLightings' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('frontLightings')}>
              Front Lightings
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'rearLightings' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('rearLightings')}>
              Rear Lightings
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'rearGlass' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('rearGlass')}>
              Rear Glass
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'tailGate' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('tailGate')}>
              Tail Gate
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'rearBumper' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('rearBumper')}>
              Rear Bumper
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'spoiler' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('spoiler')}>
              Spoiler
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'frontFenderLHS' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('frontFenderLHS')}>
              Front Fender LHS
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'frontDoorPassengerLHS' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('frontDoorPassengerLHS')}>
              Front Door Passenger LHS
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'rearDoorLHS' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('rearDoorLHS')}>
              Rear Door LHS
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'quarterPanelLHS' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('quarterPanelLHS')}>
              Quarter Panel LHS
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'quarterPanelRHS' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('quarterPanelRHS')}>
              Quarter Panel RHS
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'rearDoorRHS' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('rearDoorRHS')}>
              Rear Door RHS
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'frontDoorDriver' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('frontDoorDriver')}>
              Front Door Driver
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'frontFenderRHS' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('frontFenderRHS')}>
              Front Fender RHS
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'vehicleRoof' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('vehicleRoof')}>
              Vehicle Roof
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'wheelArchFrontLHS' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('wheelArchFrontLHS')}>
              Wheel Arch Front LHS
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'engineCompartment' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('engineCompartment')}>
              Engine Compartment
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'bootSpace' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('bootSpace')}>
              Boot Space
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'underCarriageView' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('underCarriageView')}>
              Under Carriage View
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'checkWithEngineStart' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('checkWithEngineStart')}>
              Check with Engine Start
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'interiorInspection' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('interiorInspection')}>
              Interior Inspection
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'scanningReport' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('scanningReport')}>
              Scanning Report
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'mainDataMonitorHybrid' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('mainDataMonitorHybrid')}>
              Main Data Monitor Hybrid
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'warningIndicatorMain' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('warningIndicatorMain')}>
              Warning and Indicator Main
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'roadTest' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('roadTest')}>
              Road Test
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'coolingSystem' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('coolingSystem')}>
              Cooling System
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'suspension' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('suspension')}>
              Suspension
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'startingDelay' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('startingDelay')}>
              Starting Delay
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'engineMissIdling' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('engineMissIdling')}>
              Engine Miss / Ruf Idling
            </MenuItem>
            <MenuItem className={selectedMenuItem === 'documentsRecords' ? 'selected-menu-item' : ''}  onClick={() => handleMenuItemClick('documentsRecords')}>
              Documents and Records
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="content-container">
          <div>{renderComponent()}</div>
        </div>
      </div>
    </>
  );
}

export default SidebarComp;