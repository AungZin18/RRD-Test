import React from 'react'
import { Form, Link, redirect, useActionData } from 'react-router-dom'
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import uuid from 'react-uuid'
const Postform = ({header,btntest,oldPostData,method}) => {
    const data = useActionData()
    console.log(method);
    return (
        <section className='form-section'>
            <div className='details-header'>
                <p>{header}</p>
                <Link to={"/"}><ArrowLeftIcon className='clockIcon' /></Link>
            </div>

        {/* Error */}
<hr />
{
data && data.errors && (
    <ul>
        {
            Object.values(data.errors).map(err=>(
                <li key={err}>{err}</li>
            ))
        }
    </ul>
)
}



            <Form method={method}>
                <div className='form-input'>
                    <label htmlFor="form-title">Title</label>
                    <input type="text" id='form-title' name='title' required defaultValue={oldPostData ? oldPostData.title : ""}/>
                </div>
                <div>
                    <label htmlFor="form-image">Image</label>
                    <input type="url" id='form-image' name='image' required  defaultValue={oldPostData ? oldPostData.image : ""}/>
                </div>
                <div className='form-input'>
                    <label htmlFor="form-date">Title</label>
                    <input type="date" id='form-date' name='date' required defaultValue={oldPostData ? oldPostData.date : ""}/>
                </div>
                <div className='form-input'>
                    <label htmlFor="form-description">Description</label>
                    <textarea id='form-description' name='description' required defaultValue={oldPostData ? oldPostData.description : ""}/>
                </div>
                <button className='btn'>{btntest}</button>
            </Form>
        </section>
    )
}

export default Postform

export const action = async ({ request, params }) => {
    const data = await request.formData()
    const method =request.method
    const postData = {
      id: uuid(),
      title: data.get("title"),
      image: data.get("image"),
      description: data.get("description"),
      date: data.get("date"),
    }

    let url = "http://localhost:8080/posts"

if (method==="PATCH"){
    const id = params.id
    url=`http://localhost:8080/posts/${id}`
}

  
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  
    //422
  
    if(response.status === 422){
      return response
    }
    if (!response.ok) {
  throw new Error()
    }
    return redirect("/")
  
  }