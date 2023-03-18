import React, { useContext, useState } from "react";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "../pages/Dashboard";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Portal,
} from "@chakra-ui/react";
import { ListItem } from "./ListItem";
import { FlightsContext } from "../context/Flights";

export function DropDown() {
  const { status, setStatus } = useContext(FlightsContext);

  return (
    <Menu placement="right" offset={[0, -10]}>
      <MenuButton as="div">
        <div className="ml-2">{status} &nbsp; <FontAwesomeIcon icon={faCircleChevronDown}></FontAwesomeIcon></div>
       
      </MenuButton>
      <Portal>
        <MenuList>
          <div className="w-full p-3 h-full flex-shrink-0">
            <div className="bg-sidebar-card-top rounded-xl flex flex-col justify-center items-start z-[9999]">
              <MenuItem
                as="div"
                className="px-10 py-1 h-full w-full hover:bg-gray-600 rounded-xl"
                onClick={() => setStatus("Arrivals")}
              >
                <ListItem>Arrivals</ListItem>
              </MenuItem>
              <MenuItem
                as="div"
                className="px-10 py-1 h-full w-full hover:bg-gray-600 rounded-xl"
                onClick={() => setStatus("Departures")}
              >
                <ListItem>Departures</ListItem>
              </MenuItem>
            </div>
          </div>
        </MenuList>
      </Portal>
    </Menu>
  );
}
