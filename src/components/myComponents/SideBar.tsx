import React from 'react'
import { Button } from '../ui/button'
import { Book, ClipboardList, Home, Settings } from 'lucide-react'
import Link from 'next/link'

const SideBar = () => {
    return (
        <div className="w-64 h-screen p-6 bg-white shadow-xl flex-shrink-0 fixed z-50 flex flex-col">
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
    );
};

export default SideBar;
