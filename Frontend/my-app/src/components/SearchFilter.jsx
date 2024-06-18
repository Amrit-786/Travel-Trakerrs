import { useState } from "react";

const SearchFilter = ({ onSearch, onFilter, tours }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filtered = tours.filter(tour =>
      tour.card_title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    onSearch(filtered);
  };

  const handleFilterChange = (e) => {
    setPriceRange(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* <select value={priceRange} onChange={handleFilterChange}>
        <option value="">Filter by price</option>
        <option value="0-50">0 - 50</option>
        <option value="51-100">51 - 100</option>
        <option value="101-200">101 - 200</option>
        <option value="200+">200+</option>
      </select> */}
    </div>
  );
};

export default SearchFilter;