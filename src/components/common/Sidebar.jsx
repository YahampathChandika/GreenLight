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


function SidebarComp() {
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(0);

  const menuItems = [
    'Wind Shield',
    'Hood',
    'Grill',
    'Front Bumper',
    'Front Lightings',
    'Rear Lightings',
    'Rear Glass',
    'Tail Gate',
    'Rear Bumper',
    'Spoiler',
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
      case 'Wind Shield':
        return <WindShield />;
      case 'Hood':
        return <Hood />;
      case 'Grill':
        return <Grill />;
      case 'Front Bumper':
        return <FrontBumper />;
      case 'Front Lightings':
        return <FrontLightings />;
      case 'Rear Lightings':
        return <RearLightings />;
      case 'Rear Glass':
        return <RearGlass />;
      case 'Tail Gate':
        return <TailGate />;
      case 'Rear Bumper':
        return <RearBumper />;
      case 'Spoiler':
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
          </Menu>
          <div className="sidebar-btns">
            <button className="btn btn-primary sidebar-nextbtn" onClick={handlePreviousButtonClick}>Previous</button>
            <button className="btn btn-primary sidebar-prvbtn" onClick={handleNextButtonClick}>Next</button>
          </div>
        </Sidebar>
        <div className="content-container">
          <div>{renderComponent()}</div>
        </div>
      </div>
    </>
  );
}

export default SidebarComp;
