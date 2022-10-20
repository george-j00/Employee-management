import React, { useReducer, useState } from 'react'
import Success from './Success';

const reducer = (state, action) => {
    return {
        ...state,
        [action.target.name]: action.target.value
    }
}

const AddUser = () => {
    const [submit, setSubmit] = useState(false)
    const [formData, setFormData] = useReducer(reducer, {});

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('formdata ', formData);
        setSubmit(true)
    }


    if (!submit) {
        return (
            <form action="/" className='flex w-1/2 ml-12 shadow-lg' onSubmit={handleSubmit}>
           <div className=' container mx-auto'>
               <div>
                   <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                   <input onChange={setFormData} required type='text' id='name' name='name' placeholder="  Name" className='form-control block w-full px-4 py-2 text-gray-700 border rounded-full focus:border-blue-600 focus:outline-none'  ></input>
               </div>
               <div>
                   <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                   <input onChange={setFormData} required type='email' id='email' name='email' className='form-control block w-full px-4 py-2 text-gray-700 border rounded-full focus:border-blue-600 focus:outline-none' placeholder='   email'></input>
               </div>
               <div>
                   <label htmlFor='salary' className='block text-sm font-medium text-gray-700'>Salary</label>
                   <input onChange={setFormData} required type='number ' id='salary' name='salary' placeholder="  Salary" className='form-control block w-full px-4 py-2 text-gray-700 border rounded-full focus:border-blue-600 focus:outline-none' ></input>
               </div>
               <div>
                   <label htmlFor='dob' className='block text-sm font-medium text-gray-700'>DOB</label>
                   <input onChange={setFormData} required type='date' id='dob' className='form-control block w-full px-4 py-2 text-gray-700 border rounded-full focus:border-blue-600 focus:outline-none' name='dob'  ></input>
               </div>
               <div className='flex gap-5'>
                   <label htmlFor='active' className='block text-sm font-medium text-gray-700'>Active</label>
                   <input onChange={setFormData} type='radio' name='status' id='active' className='border ' ></input>
                   <label htmlFor='inactive' className='block text-sm font-medium text-gray-700'>Inactive</label>
                   <input onChange={setFormData} type='radio' name='status' id='inactive' className='border ' ></input>
               </div>
               <button className='mt-5 rounded-full border  bg-green-500 px-7 py-2 text-base font-medium text-white hover:bg-green-400 gap-5'>Submit</button>
           </div>
       </form>
       )
    }
    else{
       return <Success />
    }   
} 
export default AddUser