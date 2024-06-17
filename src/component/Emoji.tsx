import React from 'react'
import bullsEye from "../GameHub Resources/Emojis/bulls-eye.webp"
import thumbsUp from "../GameHub Resources/Emojis/thumbs-up.webp"
import meh from "../GameHub Resources/Emojis/meh.webp"
import {Image, ImageProps} from "@chakra-ui/react";
 interface props{
    rating:number
 }

const Emoji = ({rating}:props) => {
     const emojiMap:{[key: number]:ImageProps} =  {
         3:{src:meh , alt:"meh",boxSize:"25px"},
         4:{src: thumbsUp, alt:"recommended",boxSize:"25px"},
         5:{src: bullsEye, alt:"exceptional",   boxSize:"35px"}
     }
     if(rating < 3) return null
    return (
        <Image {...emojiMap[rating]} topMargin={1} />
    )
}
export default Emoji
