import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCourse = () => {
  const [title,setTitle]=useState('');
  const[courseId,setCourseId]=useState('')
  const [type,setType]=useState('');
  const [description,setDescription]=useState('')
  const [price,setPrice]=useState('')
  const navigate=useNavigate()


  const submitForm=(e)=>{
    e.preventDefault()
    const newCourse={
      // if key value is same we can add only one value
      title,
      courseId,
      type,
      description,
      price
    }
   
    addCourseSubmit(newCourse)
    toast.success('Course added succesfullly')
    navigate('/courses')
   
  }
  const addCourseSubmit=async(newCourse)=>{
    const res=await fetch('https://localhost:5000/courses',{
      method:'POST',
      headers:{
        'Content-Type':"application/json",
    },
    body: JSON.stringfy(newCourse)
  })

  return res;
}
  return (
   <>

    <div class='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
        <div class='flex items-center'>

           
            
        </div>
       
    </div>

    <Navbar/>

<section class="bg-white mb-20">
    <div class="container m-auto max-w-2xl py-2">
      <div class="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        
        <form onSubmit={submitForm}>
          <h2 class="text-3xl text-purple-800 text-center font-semibold mb-6">
            Add Course
          </h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">
              Course Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Certified Blockchain Associate"
              required
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">
              Course Id
            </label>
            <input
              type="text"
              id="courseId"
              name="courseId"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. 1"
              required
              value={courseId}
              onChange={(e)=>setCourseId(e.target.value)}
              
            />
          </div>

          <div class="mb-4">
            <label
              htmlFor="type"
              class="block text-gray-700 font-bold mb-2"
            >
              Course Type
            </label>
            <select
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
              value={ type}
              onChange={(e)=>setType(e.target.value)}
            

            
            >
              <option value="Self-Paced">Self-Paced</option>
              <option value="Instructor-Led">Instructor-Led</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div class="mb-4">
            <label
              htmlFor="description"
              class="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Small description on the course"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              htmlFor="type"
              class="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <select
              id="price"
              name="price"
              class="border rounded w-full py-2 px-3"
              required
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              
            >
              <option value="Rs.5000">Rs.5000</option>
              <option value="Rs.3500">Rs.3500</option>
              <option value="Rs.15000">Rs.15000</option>
            </select>
          </div>

          <div>
            <button
              class="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

   
   </>
  )
}

export default AddCourse