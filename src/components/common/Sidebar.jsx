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
        </Sidebar>
        <div className="content-container">
          <div>{renderComponent()}</div>
        </div>
      </div>
    </>
  );
}

export default SidebarComp;