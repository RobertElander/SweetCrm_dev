
import React, { useState, useEffect, useContext } from 'react'
import { IconApps, IconDAta, IconSavedItems, IconSettings, IconUserManagement } from './components/Icons/mainIcons'
import PageLayout from './components/PageLayout'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Home from "./components/pages/Home"
import Applications from "./components/pages/Applications"
import DataSources from "./components/pages/DataSources"
import SavedItems from './components/pages/SavedItems'
import Settings from "./components/pages/Settings"
import UserManagement from "./components/pages/UserManagement"
import SidebarSmallScreen from './components/SidebarSmallScreen'

export const pages = [{
  id: 1,
  title: "home",
  icon: <p />
},

{
  id: 2,
  title: 'applications',
  icon: <IconApps />
},

{
  id: 3,
  title: 'data sources',
  icon: <IconDAta />
},
{
  id: 4,
  title: 'saved items',
  icon: <IconSavedItems />
},
{
  id: 5,
  title: 'user management',
  icon: <IconUserManagement />
},

{
  id: 6,
  title: 'settings',
  icon: <IconSettings />
}

]

/**
 * 
 * @param {Object} page  the page object
 * @returns {Function} will return the component mapped to the parametre page
 */
export const rightPage = (page) => {
  switch (page.id) {
    case 2:
      return <Applications />;
    case 3:
      return <DataSources />
    case 4:
      return <SavedItems />
    case 5:
      return <UserManagement />
    case 6:
      return <Settings />

    default:
      return <Home />

  }

}



const App = () => {

  const [page, setPage] = useState(pages[0])


  return (
    <div className="App flex  w-full    bg-gray-200" style={{ fontFamily: "Poppins" }}>
      <Sidebar pageHook={[page, setPage]} />
      <SidebarSmallScreen pageHook={[page, setPage]} />
      <div className="flex  flex-col flex-auto" >
        <Topbar page={page} />
        <PageLayout pageComponent={rightPage(page)} />
      </div>
    </div>

  );
}

export default App;
