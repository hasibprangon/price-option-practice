import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const PriceOptions = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div>
            {
                prices.map(optionPrice => <Price
                key={optionPrice.id}
                optionPrice={optionPrice}
                ></Price>)
            }
        </div>
    );
};

export default PriceOptions;