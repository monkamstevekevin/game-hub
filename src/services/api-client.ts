import axios from "axios";


 export default axios.create({
     baseURL: 'https://api.rawg.io/api',
    params: {

        key: 'b340d757e40b4dc680d05c47746c45b1'
    }
})