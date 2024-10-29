import React from 'react';
import { IoMdCheckmarkCircle  } from "react-icons/io";
const Feature = ({feature}) => {
    return (
        <div className='text-start'>
            <p className='flex  items-center '> <IoMdCheckmarkCircle className='text-base text-blue-600' />{feature}</p>
        </div>
    );
};

export default Feature;