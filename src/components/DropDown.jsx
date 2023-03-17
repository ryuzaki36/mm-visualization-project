import React, { useContext, useState } from "react";
import { Icon } from "../pages/Dashboard";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { ListItem } from "./ListItem";
import { FlightsContext } from "../context/Flights";

export function DropDown() {
  const { status, setStatus} = useContext(FlightsContext)

  return (
    <Menu placement="right" offset={[0, -10]}>
      <MenuButton as="div">
        <div className="ml-2">{status}</div>
      </MenuButton>
      <MenuList>
        <div className="w-full p-3 h-full flex-shrink-0">
          <div className="bg-sidebar-card-top my-2 rounded-xl w-full h-full flex flex-col justify-center items-start px-10 ">

            <MenuItem value="LAX" onClick={() => setStatus("Arrivals")}>
              <ListItem>Arrivals</ListItem>
            </MenuItem>
            <MenuItem value="JFK" onClick={() => setStatus("Departures")}>
              <ListItem>Departures</ListItem>
            </MenuItem>
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}
