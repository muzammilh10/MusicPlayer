import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Modal from '../Modal/Modal'
const Signup = () => {


    const [userDetails, setUserDetails] = useState({ email: "", password: "", gender: "", username: "" })
    const [isModalOpen, setIsModalOpen] = useState(true)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    const onChanage = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
        // if (e.target.name === 'gender') {
        //     if (e.target.id === 'm') setUserDetails({ ...userDetails, gender: 'M' })
        //     if (e.target.id === 'f') setUserDetails({ ...userDetails, gender: 'F' })
        //     if (e.target.id === 'g') setUserDetails({ ...userDetails, gender: 'G' })
        // }
    }
    const { user, isAuthenticated } = useSelector((state) => state.account)

    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    })

    const registerUser = async (e) => {
        e.preventDefault()
        const { email, password, gender, username } = userDetails
        const data = JSON.stringify({ email, password, gender, username })
        const res = await fetch("http://localhost:5001/api/user/register", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: data,
        })

        const d = await res.json()
        if (d.success) {
            setUserDetails({ email: "", password: "", gender: "", username: "" })
            toast.success(d.message, {
                position: "top-center"
            });

            navigate('/')
        }
        else {
            toast.error(d.message);
        }
    }

    const handleClose = () => {
        closeModal()
        navigate('/')
    }
    return (
        <>
            <Modal isOpen={isModalOpen} onClose={handleClose}>
                <div className="bg-white">
                    <div className='bg-white text-black text-center mx-auto '>
                        <h6 className='text-xl font-bold my-1'>Sign up for free to start listening</h6>
                        <div className="border-b border-gray-500 "></div>
                        <form onSubmit={registerUser} className='text-center mx-auto '>
                            <div className='w-full text-left pt-2'>
                                <label htmlFor="email" className='font-semibold inline-block mb-1'>What is your email</label>
                                <input type="text" id='email' name='email' value={userDetails.email} onChange={onChanage} placeholder='Enter your email' className='block w-full rounded-md border-0 transition-all duration-200 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-600 focus:ring-[2px] focus:ring-inset focus:ring-black-600 outline-none p-2 hover:ring-black bg-white' />
                            </div>
                            <div className='w-full text-left py-4'>
                                <label htmlFor="password" className='font-semibold inline-block mb-1'>Create a password</label>
                                <input type="password" id='password' name='password' value={userDetails.password} onChange={onChanage} placeholder='Enter your password' className='block w-full rounded-md border-0 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-600 focus:ring-[2px] focus:ring-inset focus:ring-black-600 outline-none p-2 hover:ring-black bg-white' />
                            </div>

                            <div className='flex gap-4 '>
                                <div className='flex-1'>
                                    <label htmlFor="username" className='font-semibold text-sm inline-block mb-1'>What should we call you?</label>
                                    <input type="text" id='username' name='username' value={userDetails.username} onChange={onChanage} placeholder='Enter your username' className='block w-full rounded-md border-0 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-600 focus:ring-[2px] focus:ring-inset focus:ring-black-600 outline-none p-2 hover:ring-black bg-white text-sm' />
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="dob" className='font-semibold text-sm inline-block mb-1'>What's your date of birth?</label>
                                    <input type="date" id='dob' name='dob' className='block w-full rounded-md border-0 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-600 focus:ring-[2px] focus:ring-inset focus:ring-black-600 outline-none p-2 hover:ring-black bg-white text-sm' />
                                </div>
                            </div>

                            <div className='w-full text-left pt-2  '>
                                <label htmlFor="gender" className='font-semibold inline-block mb-1'>What is your gender?</label>
                                <div className="flex gap-3">
                                    <input type="radio" id='m' name='gender' value='Male' onChange={onChanage} />Male
                                    <input type="radio" id='f' name='gender' value='Female' onChange={onChanage} />Female
                                    <input type="radio" id='g' name='gender' value='Rather not say' onChange={onChanage} />Rather not say
                                </div>
                            </div>

                            {/* Button */}
                            <div className='w-full text-left pt-2 flex justify-center'>
                                <input type="submit" id='submit' name='submit' className='block w-3/4 outline-none p-2 hover:scale-105 transition-all duration-200 hover:font-semibold text-center text-white rounded-full' style={{ backgroundColor: 'rgb(66, 7, 7)' }} value="Sign up" />

                            </div>

                        </form>
                        <p className='pt-2'><span className='text-black font-semibold'>Already have an account?</span> <Link to="/login" className='text-black font-semibold underline text-center hover:text-red-500'>Log in for Dream Music</Link></p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Signup