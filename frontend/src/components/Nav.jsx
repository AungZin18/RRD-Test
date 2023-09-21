import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
 <nav>
    <Link to={"/"}>BLOG.io</Link>
    <div>
        <NavLink to={"/"}>Posts</NavLink>
        <NavLink to={"/create-post"}>Create Posts</NavLink>
    </div>
 </nav>
  )
}

export default Nav