import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Book, ClipboardList, Home, Settings } from 'lucide-react'
import Link from 'next/link'

const SideBar = () => {
    const [showNavigation, setShowNavigation] = useState(false)
    return (
        <div>
            <div className='w-full h-12 bg-background z-10 p-3 fixed top-0 left-0 md:hidden'>
                <Menu onClick={() => setShowNavigation(true)} />
                <div className={`absolute top-0 h-screen z-20 bg-white transition-all duration-500 ease-in-out w-full ${showNavigation ? "left-0" : "left-[-1000px]"}`}>
                    <div className='p-6'>
                        <div className='w-full flex justify-between'>
                            <h2 className="text-2xl font-semibold mb-6">StudyPro</h2>
                            <X onClick={() => setShowNavigation(false)} />
                        </div>
                        <nav className="flex-grow flex flex-col gap-2">
                            <Link href="/" onClick={() => setShowNavigation(false)}>
                                <Button variant="ghost" className="w-full justify-start font-medium text-md">
                                    <Home className="mr-2" size={27} />
                                    Dashboard
                                </Button>
                            </Link>
                            <Link href="/tasks" onClick={() => setShowNavigation(false)}>
                                <Button variant="ghost" className="w-full justify-start font-medium text-md">
                                    <Book className="mr-2" size={27} />
                                    Tasks
                                </Button>
                            </Link>
                            <Link href="/tomorrow" onClick={() => setShowNavigation(false)}>
                                <Button variant="ghost" className="w-full justify-start font-medium text-md">
                                    <ClipboardList className="mr-2" size={27} />
                                    Tomorrow
                                </Button>
                            </Link>
                            <Link href="/settings" onClick={() => setShowNavigation(false)}>
                                <Button variant="ghost" className="w-full justify-start font-medium text-md">
                                    <Settings className="mr-2" size={27} />
                                    Settings
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="w-48 h-screen py-6 px-3 bg-white shadow-xl flex-shrink-0 fixed z-50 flex-col hidden md:flex lg:w-64 lg:p-6">
                <h2 className="text-2xl font-semibold mb-6">StudyPro</h2>
                <nav className="flex-grow flex flex-col gap-2">
                    <Link href="/">
                        <Button variant="ghost" className="w-full justify-start font-medium text-md">
                            <Home className="mr-2" size={27} />
                            Dashboard
                        </Button>
                    </Link>
                    <Link href="/tasks">
                        <Button variant="ghost" className="w-full justify-start font-medium text-md">
                            <Book className="mr-2" size={27} />
                            Tasks
                        </Button>
                    </Link>
                    <Link href="/tomorrow">
                        <Button variant="ghost" className="w-full justify-start font-medium text-md">
                            <ClipboardList className="mr-2" size={27} />
                            Tomorrow
                        </Button>
                    </Link>
                </nav>
                <Link href="/settings">
                    <Button variant="ghost" className="w-full justify-start font-medium text-md">
                        <Settings className="mr-2" size={27} />
                        Settings
                    </Button>
                </Link>
            </div>
        </div>
    );
};



export default SideBar;
