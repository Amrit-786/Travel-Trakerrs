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
}

const DashTable = () => {
    const [tableData, setTableData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await fetchData('https://travel-trakerrs-5.onrender.com/tour', page); 
            if (data.length === 0) {
                setHasMore(false);
            } else {
                setTableData(prevData => [...prevData, ...data]); 
            }
            setLoading(false);
        }
        if (hasMore) {
            getData();
        }
    }, [page]);

    const handleScroll = () => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (bottom && !loading && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);

    return (
        <div className='dashTable'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>CUSTOM</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            <td><div>{item.id}</div></td>
                            <td><div><img src={item.card_img} alt={item.card_title} /></div></td>
                            <td><div>{item.card_title}</div></td>
                            <td><div>{item.price}</div></td>
                            <td>
                                <div>
                                    <button>Update</button>
                                    <button>Remove</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {loading && <div className="loading">Loading...</div>}
            {!hasMore && <div className="no-more-data">No more data to load</div>}
        </div>
    )
}

export { DashTable };
