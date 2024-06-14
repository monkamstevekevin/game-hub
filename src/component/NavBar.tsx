import React from 'react'
 import logo from "../GameHub Resources/Logo/logo.webp"
import {HStack, Image, Text} from "@chakra-ui/react";

const NavBar = () => {
    return (
     <HStack>
         <Image src={logo} alt="logo" boxSize="60px" />
         <Text>NavBar</Text>
     </HStack>
    )
}
export default NavBar
