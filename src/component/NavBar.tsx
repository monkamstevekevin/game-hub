import React from 'react'
 import logo from "../GameHub Resources/Logo/logo.webp"
import {HStack, Image} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface  Props{
    onSearch: (searchText:string) => void
}
const NavBar = ({onSearch}:Props) => {
    return (
     <HStack justifyContent="space-between" padding="10px">
         <Image src={logo} alt="logo" boxSize="60px" />
         <SearchInput onSearch={onSearch}></SearchInput>
         <ColorModeSwitch></ColorModeSwitch>
     </HStack>
    )
}
export default NavBar
