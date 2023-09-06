"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
    
  const [isMenu, setIsMenu] = useState(false)

    

  const toggleMenu = () => {
    setIsMenu(true)
  }
    return (
    <header className="bg-secondaryColor fixed top-0 left-0 w-full z-50">
        <nav className="container relative h-24 flex justify-between items-center">
            <div className="ms-4 md:text-7xl flex items-center justify-center text-primaryColor">
                <Link href='/' className="text-2xl font-bold font-readex">Logo</Link>
            </div>
            <div className="hidden md:block md:static md:w-auto md:py-0 md:border-none md:ml-auto">
                <ul className="flex flex-col gap-5 text-center md:flex-row">
                    <li className="text-black hover:text-white hover:bg-primaryColor font-400 text-sm hover:p-1 hover:rounded-sm ease-in duration-200">
                        <Link href='/' onClick={()=> setIsMenu(false)}>Home</Link>
                    </li>
                    <li className="text-black hover:text-white hover:bg-primaryColor font-400 text-sm hover:p-1 hover:rounded-sm ease-in duration-200">
                        <Link href='#about' onClick={()=> setIsMenu(false)}>About</Link>
                    </li>
                    <li className="text-black hover:text-white hover:bg-primaryColor font-400 text-sm hover:p-1 hover:rounded-sm ease-in duration-200">
                        <Link href='#menu' onClick={()=> setIsMenu(false)}>Browse Job</Link>
                    </li>
                    <li className="text-black hover:text-white hover:bg-primaryColor font-400 text-sm hover:p-1 hover:rounded-sm ease-in duration-200">
                        <Link href='#review' onClick={()=> setIsMenu(false)}>Category</Link>
                    </li>
                    <li className="text-black hover:text-white hover:bg-primaryColor font-400 text-sm hover:p-1 hover:rounded-sm ease-in duration-200">
                        <Link href='#contact' onClick={()=> setIsMenu(false)}>Blog</Link>
                    </li>
                    <li className="text-black hover:text-white hover:bg-primaryColor font-400 text-sm hover:p-1 hover:rounded-sm ease-in duration-200">
                        <Link href='/login' onClick={()=> setIsMenu(false)}>Contact Us</Link>
                    </li>
                    <li className="text-white p-1 border-[1px] border-primaryColor text-sm rounded-[5px] hover:text-primaryColor bg-primaryColor hover:bg-transparent  hover:p-1 hover:rounded-[5px] ease-in duration-200">
                        <Link href='/login' onClick={()=> setIsMenu(false)}>Register</Link>
                    </li>
                    <li className="text-primaryColor p-1 border-[1px] border-primaryColor text-sm rounded-[5px] hover:text-whiteColor bg-transparent hover:bg-primaryColor  hover:p-1 hover:rounded-[5px] ease-in duration-200">
                        <Link href='/login' onClick={()=> setIsMenu(false)}>Register</Link>
                    </li>
                <div className="me-4 text-black text-2xl cursor-pointer">
                   
                </div>
                </ul>
                
            </div>
           {
            isMenu && (
                <div className="md:hidden block absolute top-0 left-0 w-full py-14 bg-secondaryColor border-b border-primaryColor">
                <ul className="flex flex-col gap-5 text-center items-center justify-center">
                    <li className="text-black hover:text-white hover:p-2 hover:rounded-sm hover:bg-primaryColor font-400 text-sm ease-in duration-200">
                        <Link href='/' onClick={()=> setIsMenu(false)}>Home</Link>
                    </li>
                    <li className="text-black hover:text-white hover:p-2 hover:rounded-sm hover:bg-primaryColor font-400 text-sm ease-in duration-200">
                        <Link href='#about' onClick={()=> setIsMenu(false)}>About</Link>
                    </li>
                    <li className="text-black hover:text-white hover:p-2 hover:rounded-sm hover:bg-primaryColor font-400 text-sm ease-in duration-200">
                        <Link href='#menu' onClick={()=> setIsMenu(false)}>Browse Job</Link>
                    </li>
                    <li className="text-black hover:text-white hover:p-2 hover:rounded-sm hover:bg-primaryColor font-400 text-sm ease-in duration-200">
                        <Link href='#review' onClick={()=> setIsMenu(false)}>Category</Link>
                    </li>
                    <li className="text-black hover:text-white hover:p-2 hover:rounded-sm hover:bg-primaryColor font-400 text-sm ease-in duration-200">
                        <Link href='#contact' onClick={()=> setIsMenu(false)}>Blog</Link>
                    </li>
                    <li className="text-black hover:text-white hover:p-2 hover:rounded-sm hover:bg-primaryColor font-400 text-sm ease-in duration-200">
                        <Link href='/login' onClick={()=> setIsMenu(false)}>Contact Us</Link>
                    </li>
                    <li className="text-white p-1 border-[1px] border-primaryColor text-sm rounded-[5px] hover:text-primaryColor bg-primaryColor hover:bg-transparent  hover:p-1 hover:rounded-sm ease-in duration-200">
                        <Link href='/login' onClick={()=> setIsMenu(false)}>Register</Link>
                    </li>
                    <li className="text-primaryColor p-1 border-[1px] border-primaryColor text-sm rounded-[5px] hover:text-whiteColor bg-transparent hover:bg-primaryColor  hover:p-1 hover:rounded-sm ease-in duration-200">
                        <Link href='/login' onClick={()=> setIsMenu(false)}>Register</Link>
                    </li>
                </ul>
                <div className="absolute top-[0.7rem] right-0 text-black text-2xl cursor-pointer">
                    <AiOutlineClose onClick={()=> setIsMenu(false)}/>
                </div>
            </div>
            )
           }
            <div className="md:hidden flex items-center gap-5 text-black me-4">
                <div className="md:hidden cursor-pointer text-xl" onClick={toggleMenu}>
                    <HiMenuAlt1 />
                </div>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;
