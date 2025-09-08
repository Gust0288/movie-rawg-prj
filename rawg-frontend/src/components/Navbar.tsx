import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import { ColormodeSwitch } from "./ColormodeSwitch";

export const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={4}>
      <Image src={logo} boxSize="60px" />
      <ColormodeSwitch></ColormodeSwitch>
    </HStack>
  );
};
