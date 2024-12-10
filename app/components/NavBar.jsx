"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image'


const navLinks = [
{
    title:"首页",
    path:"#",
},
{
    title:"新闻",
    path:"#project",
    
},
{
    title:"成果",
    path:"#project",
    
},
{
    title:"经验",
    path:"#project",
    
},
{
    title:"成员",
    path:"#project",
    
},
{
    title:"关于我们",
    path:"#project",
    
}
]
const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-0 bg-[#121212] bg-opacity-100">                                 {/* 保持导航栏在顶部不动 且设置有透明度*/}                            
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link href={"/"} className="flex items-center text-2xl md:text-5xl text-white font-semibold">
                <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                <span className="text-2xl text-white font-semibold">数智农业课题组</span>
                
            </Link>
            {/*汉堡导航栏开/关逻辑*/}
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button 
                            onClick={ () => setNavbarOpen(true)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'> {/* rounded:元素边角为圆角；border-slate:边框颜色；text-slate:文字颜色*/} 
                            <Bars3Icon className="h-5 w-5  transition-transform duration-300" />
                        </button>
                    ) : (
                        <button
                            onClick={ () => setNavbarOpen(false)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'> {/* rounded:元素边角为圆角；border-slate:边框颜色；text-slate:文字颜色*/} 
                            <XMarkIcon className="h-5 w-5 transition-transform duration-300 " />
                        </button>
                    )
                }

            </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">  {/* flex:弹性布局 flex-row：水平排列 */}
                        {
                            navLinks.map((Link, index) => (
                                <li key={index}>   
                                    <NavLink href={Link.path} title={Link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
  )
}

export default NavBar
