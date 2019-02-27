import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationsItem/NavigationItem";

const NavigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem to="/" exact>Dishes</NavigationItem>
        <NavigationItem to="/orders">Orders</NavigationItem>
    </ul>
);

export default NavigationItems;
