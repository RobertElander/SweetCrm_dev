import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../context/userContext'

const Topbar = ({ page }) => {

    const user = useContext(userContext)

    return (
        <div className="flex justify-between items-start w-full p-3 bg-gray-50 ">


            <div className="Page lg:px-5 px-8  divide-x-1 flex items-center space-x-2  ">
                <span className="text-gray-600">
                    {page.icon}
                </span>
                <h2 className="text-lg  font-semibold  capitalize  text-gray-700">{page.title}</h2>


            </div>


            <div className="User flex items-center space-x-2 border-l  px-2">

                <div className="Avatar md:w-9 md:h-9 w-7 h-7 md:text-sm text-xs  grid place-items-center uppercase rounded-full  text-white  bg-purple-500  ">
                    <span >{user.firstName[0]}{user.lastName[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-700">{user.firstName}</h3>
            </div>

        </div>
    )
}

export default Topbar
