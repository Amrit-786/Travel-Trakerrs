import React, { useState, useEffect } from 'react';
import { Price } from '../Contents/datainterface';


export const PriceList: React.FC = () => {
    const [products, setProducts] = useState<Price[]>([]);

    useEffect(() => {
        fetch('https://reactdata-3.onrender.com/price')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{marginTop:"35px"}}>
            <h1 style={{fontSize:"30px", textAlign:"left", marginLeft:"30px"}}><b>Tour prices</b></h1>
            <table style={{ width: "100%"}}>

                <tbody style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 500px)",
                    gap:"30px",
                    padding: "50px",
                    justifyContent: "space-between",

                }}>
                    {products.map(product => (
                        <tr style={{
                            fontSize: "17px", display: "grid", gridTemplateColumns: "350px 50px", justifyContent: "space-between",
                        }} key={product.id}>
                            <td style={{ textAlign: "left" }}>{product.people}</td>
                            <td style={{ textAlign: "right" }}><b>{product.price}</b></td>
                            <hr />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriceList;