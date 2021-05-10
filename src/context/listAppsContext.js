import React, { useState, useEffect, useContext, createContext } from 'react'


// let's make list of apps available to many components



const listAppsContextDispatch = createContext();
const listAppsContext = createContext();



const ListAppsContextProvider = (props) => {



    const [listApps, setListApps] = useState([
        {
            id: 1,
            name: "Dashboard",
            dateCreated: new Date().toLocaleDateString(),
            createdBy: {
                id: 1,
                firstName: "John",
                lastName: "Doe"
            },
            url: "Dash.my.sweetcloud.se"


        }
    ])


    return <listAppsContext.Provider value={listApps}>

        <listAppsContextDispatch.Provider value={setListApps}>
            {props.children}
        </listAppsContextDispatch.Provider>
    </listAppsContext.Provider>

}

export { ListAppsContextProvider, listAppsContextDispatch, listAppsContext }
