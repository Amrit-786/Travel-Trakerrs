import axios from 'axios';


const API_BASE_URL="https://travel-trakerrs-5.onrender.com";

export const fetchTours=async () =>{
    try{
        const response =await axios.get(`${API_BASE_URL}/tour`);
        return response.data;
    }
    catch(error){
        console.error('Error fetching tours', error);
        throw error;
    }
};

export const fetchTourById = async(id)=>{
    try{
        const response=await axios.get(`${API_BASE_URL}/tour/${id}`);
        {console.log(response)};
        
        // console.log('Tour data:', response.data);
        
        return response.data;
    }
    catch(error){
        console.error(`Error fetching tour with id ${id}`,error);
        throw error;
    }
}