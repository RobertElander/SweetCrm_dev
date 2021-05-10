import React, { useState, useEffect, useContext } from 'react'
import { pages } from '../App'
import { listAppsContext } from '../context/listAppsContext'


const Sidebar = ({ pageHook }) => {


    const [page, setPage] = pageHook

    const listApps = useContext(listAppsContext)



    return (


        <div className="lg:flex hidden flex-col min-h-screen w-50  text-gray-300 " style={{ backgroundColor: "#5C6375" }}>

            <div className="logo   p-4 flex  " >
                <h3 className="md:text-xl text-lg hover:text-purple-400 font-semibold pr-10 cursor-pointer " onClick={() => setPage({ id: 1, title: "home", icon: <p /> })}> Sweet</h3>

            </div>
            <div className="Upper Items flex flex-col space-y-1  pt-4" >



                {
                    pages.filter(pg => pg.id != 1).map(pg => (<div className={`flex space-x-1 relative   hover:bg-gray-700 items-center  w-64 p-3 cursor-pointer 
                           ${page.id == pg.id && 'bg-gray-700 '} `}
                        onClick={() => setPage(pg)}
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
                <aside>Dummy Menu</aside>
                <h5>Support</h5>
                <h5>Knowledge base</h5>
                <h5>Contact us</h5>
            </div>

        </div>
    )
}

export default Sidebar
