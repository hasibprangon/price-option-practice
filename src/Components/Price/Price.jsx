import React from 'react';
import Feature from '../Feature/Feature';

const Price = ({ optionPrice }) => {
    const { name, price, features } = optionPrice;
    return (
        <div className='flex flex-col bg-purple-500 p-4 rounded-lg text-white text-center'>
            <p className='font-bold'>
                <span className='text-4xl'>$</span>
                <span className='text-4xl'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </p>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <div className='mt-4 flex-grow'>
                {
                    features.map((feature, index) => <Feature
                        key={index}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            
            <button className='bg-green-500 w-full py-2 rounded-lg font-semibold text-lg mt-2'>Buy Now</button>
        </div>
    );
};

export default Price;