import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const PriceOptions = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-4'><span className='text-blue-400'>Best</span> price in the <span className='text-purple-400'>town</span></h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    prices.map(optionPrice => <Price
                        key={optionPrice.id}
                        optionPrice={optionPrice}
                    ></Price>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;