import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DashTable.css';

const fetchData = async (apiUrl, page) => {
  try {
    let res = await axios.get(apiUrl, { params: { page } });
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const DashTable = () => {
  const apiUrl = 'https://travel-trakerrs-5.onrender.com/tour';
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchData(apiUrl, page);
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setTableData(prevData => [...prevData, ...data]);
      }
      setLoading(false);
    };

    if (hasMore) {
      getData();
    }
  }, [page]);

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom && !loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  const handleUpdate = async (id, updatedData) => {
    try {
      // Assuming an API endpoint for updating data
      const res = await axios.put(`${apiUrl}/${id}`, updatedData);
      if (res.status === 200) {
        // Update local state after successful API call
        const updatedTableData = tableData.map(item => (item.id === id ? res.data : item));
        setTableData(updatedTableData);
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Assuming an API endpoint for deleting data
      const res = await axios.delete(`${apiUrl}/${id}`);
      if (res.status === 200) {
        // Update local state after successful API call
        const updatedTableData = tableData.filter(item => item.id !== id);
        setTableData(updatedTableData);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className='dashTable'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td><img src={item.card_img} alt={item.card_title} /></td>
              <td>{item.card_title}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleUpdate(item.id, { ...item, price: item.price + 10 })}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <div className='loading'>Loading...</div>}
      {!hasMore && <div className='no-more-data'>No more data to load</div>}
    </div>
  );
};

export { DashTable };
