import React, { useState } from "react";
import { Icon } from "../pages/Dashboard";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { ListItem } from "./ListItem";

export function Airport() {
  const [airport, setAirport] = useState("YYC");

  const handleAirportChange = (event) => {
    setAirport(event.target.value);
  };

  return (
    <Menu placement="right" offset={[0,-10]}>
      <MenuButton as="div">
        <div className="w-full p-3 h-24 sm:h-20 xl:h-24 hidden sm:block flex-shrink-0">
          <div className="bg-sidebar-card-top rounded-xl w-full h-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
            <Icon path="res-react-dash-sidebar-card" className="w-9 h-9 " />
            <div className="block sm:hidden xl:block ml-3">
              <div className="text-sm font-bold text-white">Flight Data</div>
              <div className="text-sm text-gray-200">{airport} Airport</div>
            </div>
            <div className="block sm:hidden xl:block flex-grow" />
            <Icon
              path="res-react-dash-sidebar-card-select"
              className="block sm:hidden xl:block w-5 h-5"
            />
          </div>
        </div>
      </MenuButton>
      <MenuList>
        <div className="w-full p-3 h-full flex-shrink-0">
          <div className="bg-sidebar-card-top rounded-xl w-full h-full flex flex-col justify-center items-start px-10 ">
            <MenuItem value="LAX" onClick={() => setAirport("YYC")}>
              <ListItem>LAX Airport</ListItem>
            </MenuItem>
            <MenuItem value="JFK" onClick={() => setAirport("JFK")}>
              <ListItem>JFK Airport</ListItem>
            </MenuItem>
            <MenuItem value="ORD" onClick={() => setAirport("ORD")}>
              <ListItem>ORD Airport</ListItem>
            </MenuItem>
            <MenuItem value="ORD" onClick={() => setAirport("ORD")}>
              <ListItem>ORD Airport</ListItem>
            </MenuItem>
            <MenuItem value="ORD" onClick={() => setAirport("ORD")}>
              <ListItem>ORD Airport</ListItem>
            </MenuItem>
            <MenuItem value="ORD" onClick={() => setAirport("ORD")}>
              <ListItem>ORD Airport</ListItem>
            </MenuItem>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
