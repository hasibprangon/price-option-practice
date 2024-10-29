import React from 'react';

const Link = ({ route }) => {
    return (
        <div>
            <li className='mr-3 bg-purple-500 px-5 rounded-lg hover:bg-purple-700 lg:mt-0 mt-4'>
                <a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;