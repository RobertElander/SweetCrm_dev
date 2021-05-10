import React, { useState, useEffect, useContext, createContext } from 'react'


const userContext = createContext();

const userContextDispatch = createContext();



const UserContextProvider = (props) => {




    const [user, setUser] = useState({
        id: 1,
        firstName: "John",
        lastName: "Doe"
    });


    return <userContext.Provider value={user}>

        <userContextDispatch.Provider value={setUser}>
            {props.children}
        </userContextDispatch.Provider>
    </userContext.Provider>

}

export { UserContextProvider, userContext, userContextDispatch }
