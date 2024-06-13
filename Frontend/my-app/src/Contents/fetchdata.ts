import axios from "axios"
import { CarouselItem } from "./datainterface";


const fetchdata = async ():Promise<CarouselItem[]> => {
 
try {
    const response = await axios.get("http://localhost:8000/Card_data");
    const jsonData = await response.data;
    console.log(jsonData);
    

    return response.data;


} catch (error) {
   console.log("Error", error);
   throw(error);
}

}

export default fetchdata