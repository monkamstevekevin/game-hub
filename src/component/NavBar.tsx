import React from 'react'
 import logo from "../GameHub Resources/Logo/logo.webp"
import {HStack, Image} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
     <HStack justifyContent="space-between" padding="10px">
         <Image src={logo} alt="logo" boxSize="60px" />
         <ColorModeSwitch></ColorModeSwitch>
     </HStack>
    )
}
export default NavBar
