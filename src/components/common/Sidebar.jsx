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
      default:
        return null;
    }
  };

  return (
    <>
      <div className="sidebar-container">
        <Sidebar width="250px" transitionDuration={500}>
          <Menu className="sidebar">
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={menuItem}
                className={selectedMenuItemIndex === index ? 'selected-menu-item' : ''}
                onClick={() => handleMenuItemClick(index)}
              >
                {menuItem === 'hood' ? 'Hood / Bonat' : menuItem}
              </MenuItem>
            ))}
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
