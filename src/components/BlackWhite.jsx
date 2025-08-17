import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const BlackWhite = () => {
    const [isdarkmode, setisdarkmode] = useState(false)
    useEffect(() => {
        let theme = localStorage.getItem("theme")
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
            setisdarkmode(true)
        } else {
            localStorage.setItem("theme", "light")
            setisdarkmode(false)
        }
    }, [])
    const toggle = () => {
        if (isdarkmode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setisdarkmode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setisdarkmode(true)
        }
    }
    return (
           <div className='flex justify-center items-center'>
             <button onClick={toggle} className='fixed md:top-8 top-6 right-15 mr-4 md:right-0 z-10  md:w-[5%] w-[3%] cursor-pointer'>
                {isdarkmode ? <Sun className='w-[30px] h-[30px] text-yellow-300' />
                    : <Moon className='w-[30px] h-[30px] text-blue-200' />}</button>
           </div>
    )
}

export default BlackWhite
