import React, { useState, useEffect, useContext } from 'react'
import { pages } from '../App'
import { listAppsContext } from '../context/listAppsContext'
import { IconCloseSmallScreen, IconMenu } from './Icons/mainIcons'


const SidebarSmallScreen = ({ pageHook }) => {


    const [page, setPage] = pageHook

    const listApps = useContext(listAppsContext)

    const [isSidebareOpen, setIsSidebareOpen] = useState(false)


    if (!isSidebareOpen)
        return <div className="lg:hidden   absolute top-4 left-2  w-7 pl-1 bg-gray-200  rounded-md     ">

            <IconMenu onClick={() => setIsSidebareOpen(true)} />
        </div>
    return (


        <div className="lg:hidden absolute z-10 top-0 bottom-0 left-0 right-24  flex-col h-screen   text-gray-300 " style={{ backgroundColor: "#5C6375" }}>


            <div className="logo   p-4 flex justify-evenly  " >
                <h3 className="md:text-xl text-lg hover:text-purple-400 font-semibold pr-10 cursor-pointer " onClick={() => setPage({ id: 1, title: "home", icon: <p /> })}> Sweet</h3>
                <div className="text-gray-300">
                    <IconCloseSmallScreen onClick={() => setIsSidebareOpen(false)} />
                </div>

            </div>
            <div className="Upper Items flex flex-col space-y-1  pt-4" >



                {
                    pages.filter(pg => pg.id != 1).map(pg => (<div className={`flex space-x-1 relative   hover:bg-gray-700 items-center  w-full p-3 cursor-pointer 
                           ${page.id == pg.id && 'bg-gray-700 '} `}
                        onClick={() => { setPage(pg); setIsSidebareOpen(false) }}
                        key={pg.id}
                    >
                        <span className="w-8">
                            {pg.icon}
                        </ span>
                        <h5 className="uppercase text-sm">{pg.title}</h5>
                        {
                            pg.id == 2 &&
                            <span className="absolute  right-2 w-6 h-4 flex justify-center items-center text-sm bg-green-600 rounded-md">{listApps.length}</span>
                        }


                    </div>))
                }

            </div>

            <div className="Lower Items absolute bottom-4 left-4 font-sans text-gray-400">
                <h5>Support</h5>
                <h5>Knoledge base</h5>
                <h5>Contact us</h5>

            </div>

        </div>
    )
}

export default SidebarSmallScreen
