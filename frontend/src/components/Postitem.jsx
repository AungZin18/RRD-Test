import React from 'react'
import { Link } from 'react-router-dom'
import {CalendarDaysIcon} from "@heroicons/react/24/solid"
const Postitem = ({post}) => {
    const {id,title,date,image}=post
    return (
        <section className='post'>
           <Link to={`${id}`}> <img src={image} alt="" /></Link>
          <div>
             <Link to={`${id}`}> <p className='title'>{title}</p></Link>
          
          </div>
          <div className='cal-flex'>
          <CalendarDaysIcon className='clockIcon'/>
            <p className='date'>Post at {date}</p>
          </div>
            <hr />
        </section>
    )
}

export default Postitem