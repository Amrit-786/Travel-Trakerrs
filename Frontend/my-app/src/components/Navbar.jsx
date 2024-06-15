import React, { useEffect, useMemo, useState } from 'react';
import { fetchTours } from '../services/api';

const NavbarWithSearch = () => {
    const [tours,setTours] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(()=>{
        const getTours=async()=>{
            try{
                const data =await fetchTours();
                setTours(data);
            }
            catch(error){
                console.error("Error fetching tours data:", error);
            }
        };
        getTours();
    },[tours,query]);
  
    // useMemo to filter products based on the query
    const filteredTours = useMemo(() => {
      return tours.filter((tours) =>
        tours.card_title.toLowerCase().includes(query.toLowerCase())
      );
    }, [tours,query]);
    const toggleDarkMode = () => setDarkMode(!darkMode); // Function to toggle dark mode
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a place"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <ul>
          {filteredTours.map((tours) => (
            <li key={tours.id}>{tours.card_img}</li>
          ))}
        </ul> */}
      </div>
    );
  };
  

export default NavbarWithSearch;
