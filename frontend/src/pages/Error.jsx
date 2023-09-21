import React from 'react'
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className='errorPage'>
            <div>
                <ExclamationTriangleIcon className='icon' />
                <p>Something went wrong</p>
                
                <Link to={"/"}>
                <p className='btn er-btn'>Go Back Home Page</p>
                </Link>
            </div>
        </section>
    )
}

export default Error