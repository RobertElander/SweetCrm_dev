// this is the middle Container (layout) for our App


import React from 'react'

const PageLayout = ({ pageComponent }) => {
    return (
        <div className="w-full  h-full">
            {pageComponent}

        </div>
    )
}

export default PageLayout
