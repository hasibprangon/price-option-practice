import React from 'react';

const Price = ({optionPrice}) => {
    const {name, price } = optionPrice;
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Price;