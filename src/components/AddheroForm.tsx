import React,{useState} from 'react'
import axios from 'axios'
import Router from 'next/router'
import { toast } from 'react-toastify';



const AddheroForm = () => {
    const [heroForm,setHeroForm] = useState({
        superHero:'',
        realName:''
    })
    
    const handleChange = (e:any) => {
        setHeroForm({
            ...heroForm,
            [e.target.name]:e.target.value
        })
    }

    const handleFormSubmit = async (e:any) => {
        e.preventDefault();
        try {
               await axios.post("http://localhost:3000/api/hero", JSON.stringify(heroForm),{
                headers: {
                    'Content-Type': 'application/json'
                  }
               }) 
               toast.success("Hero added successfully!");
               Router.push('/');
               
        } catch (error) {
            console.log(error);
            toast.error("Bad Request!")
        }

    }
  return (
    <div>
        <div className=" mt-10 block border border-2 p-6 rounded-lg shadow-lg bg-white max-w-sm">
  <form onSubmit={handleFormSubmit}>
    <div className="form-group mb-6">
      <label className="form-label inline-block mb-2 text-gray-700">Superhero Name</label>
      <input name="superHero" onChange={handleChange} type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
        aria-describedby="emailHelp" placeholder="Enter Superhero Name"/>
      <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
        else.</small>
    </div>
    <div className="form-group mb-6">
      <label className="form-label inline-block mb-2 text-gray-700">Real Name</label>
      <input name="realName" onChange={handleChange} type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
        placeholder="Enter Real Name"/>
    </div>
    <button type="submit" className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Submit</button>
  </form>
</div>
    </div>
  )
}

export default AddheroForm;