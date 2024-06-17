import React from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
interface prop{
    onselectSortOrder: (sortOrder: string) => void,
    sortOrder: string
}
const SortSelector = ({onselectSortOrder ,sortOrder}:prop) => {
     const ListOfsortOrders = [
         {value: '', label: 'Relevance'},
         {value: '-added', label: 'Date Added'},
         {value: 'name', label: 'Name'},
         {value: '-released', label: 'Released date'},
         {value: '-metacritic' , label: 'Popularity'},
         {value: '-rating', label: 'Average rating'},


     ]
     const currentSortOrder = ListOfsortOrders.find((s) => s.value === sortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {ListOfsortOrders.map(
                    (order) => <
                        MenuItem onClick={() =>onselectSortOrder(order.value)}
                                 key={order.value}
                                 value={order.value}>{order.label}</MenuItem>)}
            </MenuList>

        </Menu>
    )

}
export default SortSelector
