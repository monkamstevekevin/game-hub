import React from 'react'
 import logo from "../GameHub Resources/Logo/logo.webp"
import {HStack, Image} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
     <HStack justifyContent="space-between" padding="10px">
         <Image src={logo} alt="logo" boxSize="60px" />
         <SearchInput></SearchInput>
         <ColorModeSwitch></ColorModeSwitch>
     </HStack>
    )
}
export default NavBar
