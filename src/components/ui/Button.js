
import React from 'react'

const Button = ({ className, onClick, onSubmit, children, type }) => {
    return (
        <button onClick={onClick} type={type} onSubmit={onSubmit}
            className={className +
                " flex items-center  bg-green-600 rounded-md p-2 text-sm  px-4  hover:bg-green-800 text-gray-100"}
        >

            {children}
        </button>
    )
}

export default Button
