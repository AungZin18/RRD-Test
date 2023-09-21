import React from 'react'
import Postform from '../components/Postform'
import { useRouteLoaderData } from 'react-router-dom'

const Edit = () => {
  const post =useRouteLoaderData("post-detail")
  return (
<>
<Postform header={"Edit yourt post now" } btntest={"Update Post"} oldPostData={post} method={"patch"}/>
</>
  )
}

export default Edit