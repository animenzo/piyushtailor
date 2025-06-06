import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { toast } from 'react-toastify';


export function Contact(props) {

    const [formData,setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        message: ''
    })
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = {
            access_key: import.meta.env.VITE_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      address: formData.address,
      phone: formData.phone,
      message: formData.message,
        }
        try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Form sent successfully!");
        setFormData({ name: '', email: '', address: '', phone: '', message: '' });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    }
    }
    return (
        <>
           <div className='xl:p-20'>
             <div id='contact' className='p-10 md:p-7  rounded-4xl w-full flex flex-col lg:flex-row items-center justify-center border-zinc-300 border-x-2 gap-6 mb-20'>
                {/* Left Section */}
                <div className='w-full ml-20 mr-20 lg:w-1/2 space-y-6'>
                    <h2 className='text-xl md:text-2xl xl:text-3xl mb-4'>
                        I'm open to new opportunities and always eager to learn — let’s connect and grow together.
                    </h2>
                    <div className='space-y-4'>
                        <h3 className='flex items-center gap-2'>
                            <IoIosMail className='text-2xl' />
                            <a href="mailto:piyush.tailor.5076@gmail.com" className='hover:text-blue-400'>
                                piyush.tailor.5076@gmail.com
                            </a>
                        </h3>
                        <h3 className='flex items-center gap-2'>
                            <IoCallSharp className='text-2xl' />
                            <a href="tel:8000923209" className='hover:text-blue-400'>
                                Call
                            </a>
                        </h3>
                        <div>
                            <h4 className='uppercase text-sm font-semibold'>socials.</h4>
                            <div className="mt-2 flex gap-4 text-2xl">
                                <a href="https://www.instagram.com/piyusshh_?igsh=MWNkaGVzazljeGo0Zg==" className="hover:text-red-400" target="_blank" rel="noreferrer">
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="https://github.com/animenzo" target="_blank" className="hover:text-zinc-500" rel="noreferrer">
                                    <i className="ri-github-fill"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/piyush-tailor-641b7015a" className="hover:text-blue-500 p-2" target="_blank" rel="noreferrer">
                                    <i className="ri-linkedin-fill rounded-full"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className='w-full lg:w-1/2 rounded-3xl p-10  dark:bg-white bg-blue-200 mx-20 font-mono'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        
                        <input className='border-b-2 border-blue-500 text-lg px-2 text-black outline-none' type="text" placeholder='Your Name' name='name' value={formData.name} onChange={handleChange} required />
                        <input className='border-b-2 border-blue-500 text-lg px-2 text-black outline-none' type="email" placeholder='Your Email' name='email' value={formData.email} onChange={handleChange} required />
                        <input className='border-b-2 border-blue-500 text-lg px-2 text-black outline-none' type="text" name="address" value={formData.address} placeholder="Your Address" onChange={handleChange} />
                        <input className='border-b-2 border-blue-500 text-lg px-2 text-black outline-none' type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                        <textarea className='border-b-2 border-blue-500 text-lg px-2 text-black outline-none resize-none' value={formData.message} name="message" cols="20" rows="3" placeholder="Your Message" onChange={handleChange}></textarea>
                        <button  className='cursor-pointer flex px-5 py-2 rounded-xl items-center gap-2 font-bold text-lg bg-blue-400 hover:bg-blue-500 w-fit self-center mt-2' type="submit">
                            <IoIosSend /> Send Message
                        </button>
                    </form>
                </div>
            </div>
           </div>
        </>
    )
}
