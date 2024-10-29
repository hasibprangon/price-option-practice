import React, { useState } from 'react';
import Link from '../Link/Link';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const NavBar2 = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile" },
    ];
    return (
        <nav className='bg-purple-600'>
            <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose className='' /> : <IoIosMenu className=''/>
                }
            </div>
            
         
            <ul className={`md:flex absolute md:static p-4 duration-1000 bg-purple-600 rounded-md ${
                open ? 'top-6' : '-top-60'
            }`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar2;