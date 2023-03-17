import { useContext, useState } from "react";
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { CalendarIcon, InfoIcon, TimeIcon } from "@chakra-ui/icons";
import { ListItem } from "./ListItem";
import { FlightsContext } from "../context/Flights";

export function SelectionDay() {
  const { selectedDay, setSelectedDay } = useContext(FlightsContext);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const Icon = {
    yesterday: <InfoIcon color="gray.300" mr="2" />,
    today: <CalendarIcon color="gray.300" mr="2" />,
    tomorrow: <TimeIcon color="gray.300" mr="2" />,
  };

  return (
    <Menu>
      <MenuButton
        as={Text}
        px="4"
        py="2"
        bg="card"
        rounded="full"
        cursor="pointer"
        _hover={{ bg: "gray.100" }}
      >
        {Icon[selectedDay]}
        &nbsp;
        {selectedDay[0].toUpperCase() + selectedDay.slice(1)}
      </MenuButton>
      <Portal>
        <MenuList>
          <div className="w-full p-3 h-full flex-shrink-0">
            <div className="bg-sidebar-card-top rounded-xl flex flex-col justify-center items-start z-[9999]">
              <MenuItem
                as="div"
                className="px-10 py-1 h-full w-full hover:bg-gray-600 rounded-xl"
                onClick={() => setSelectedDay("yesterday")}
              >
                <ListItem>
                  <InfoIcon color="gray.300" mr="2" />
                  &nbsp; Yesterday
                </ListItem>
              </MenuItem>
              <MenuItem
                as="div"
                className="px-10 py-1 h-full w-full hover:bg-gray-600 rounded-xl text-center"
                onClick={() => setSelectedDay("today")}
              >
                <ListItem>
                  {" "}
                  <CalendarIcon color="gray.300" mr="2" />
                  &nbsp; Today
                </ListItem>
              </MenuItem>
              <MenuItem
                as="div"
                className="px-10 py-1 h-full w-full hover:bg-gray-600 rounded-xl"
                onClick={() => setSelectedDay("tomorrow")}
              >
                <ListItem>
                  {" "}
                  <TimeIcon color="gray.300" mr="2" />
                  &nbsp; Tomorrow
                </ListItem>
              </MenuItem>
            </div>
          </div>
        </MenuList>
      </Portal>
    </Menu>
  );
}
