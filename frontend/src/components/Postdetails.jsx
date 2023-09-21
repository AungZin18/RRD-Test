import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid"
import { Link,useSubmit } from "react-router-dom"
const Postdetails = ({ post }) => {
  const { description, image, title, date } = post
const submit=useSubmit()
  const postDeleteHandler=()=>{
  const comfirmStatus =  window.confirm("Are you sure You want to delete this post?")

  if(comfirmStatus){
submit(null,{method:"DELETE"})
  }
  }
  return (
    <section className='details'>
      <div className="title-flex">
        <h3 className='detail-title'>{title}</h3>
        <Link to={"/"}><ArrowLeftIcon className="clockIcon" /></Link>
      </div>
      <div className="cal-flex">
        <CalendarDaysIcon className="clockIcon" />
        <p className='date'>{date}</p>
      </div>
      <img src={image} alt="" />
      <p className='description'>{description}</p>
      <div className="detail-footer">
        <Link to={`edit-post`}><p className="btn sm">Edit</p></Link>
        <p className="btn sm" onClick={postDeleteHandler}>Delete</p>
      </div>
    </section>
  )
}

export default Postdetails