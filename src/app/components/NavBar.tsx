"use client"
import React, { useState } from 'react'
import { BiSupport } from 'react-icons/bi'
import { BsCardImage, BsRocket } from 'react-icons/bs'
import { FaPenFancy } from 'react-icons/fa'
import { GoFileDirectoryFill } from 'react-icons/go'
import { ImMagicWand } from 'react-icons/im'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'
import { IoVideocam } from 'react-icons/io5'
import { MdHomeFilled, MdNotifications } from 'react-icons/md'
import { RiImageAiFill } from 'react-icons/ri'

interface NavBarProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

export default function NavBar({darkMode, toggleTheme}: NavBarProps) {
    const [active, setActive] = useState('home')
  

    const navItems = [
        { name: 'home', icon: <MdHomeFilled /> },
        { name: 'image', icon: <BsCardImage /> },
        { name: 'video', icon: <IoVideocam /> },
        { name: 'magic', icon: <ImMagicWand /> },
        { name: 'pen', icon: <FaPenFancy /> },
        { name: 'rocket', icon: <BsRocket /> },
        { name: 'directory', icon: <GoFileDirectoryFill /> },
    ]
  return (
    <nav className={`flex items-center justify-between px-6 py-4 transition-colors ${darkMode ? 'bg-gray-900 text-gray-50' : 'bg-white text-black'}`}>
        <div className={`text-black/40 font-medium text-2xl ${darkMode ? 'text-white' : 'text-black/40' }`}>
            <h1>benevolent</h1>
        </div>
            <ul className={`flex items-center gap-x-8 bg-gray-200 rounded-2xl px-4 py-2 text-lg ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-black'}`}>
                {navItems.map((item) => (
                    <li key={item.name} onClick={() => setActive(item.name)} className={`cursor-pointer text-lg rounded-2xl p-2 transition-all ${active === item.name ? `${darkMode ? 'bg-gray-100 text-gray-900' : 'bg-white text-black'} shadow-lg` : 'hover:bg-gray-200 text-gray-700'}`}>{item.icon}</li>
                ))}
            </ul>

        <div className='flex items-center gap-4'>
            <div className={`flex flex-row items-center gap-1 bg-gray-200 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-black'}`}>
            <RiImageAiFill className='text-lg'/>
            <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Gallery</span>
            </div>
            <div className={`flex flex-row items-center gap-1 bg-gray-200 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-black'}`}>
                <BiSupport className='text-lg'/>
                <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Support</span>
            </div>
            <MdNotifications className={`cursor-pointer text-3xl p-2 rounded-full 
          ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-300 text-black'}`}/>
          <button onClick={toggleTheme}>
            {darkMode
               ? <IoMdSunny className='text-gray-50 bg-gray-700 p-2 rounded-full cursor-pointer text-3xl'/>
               : <IoMdMoon className='text-black bg-gray-300 p-2 rounded-full cursor-pointer text-3xl'/>
            }
          </button>
        </div>
    </nav>
  )
}
