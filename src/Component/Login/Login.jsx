import React, { useEffect, useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { userActor } from '../../states/actors/userActor'
import Modal from '../Modal/Modal'

const Login = () => {
    const dispatch = useDispatch()
    const { user, isAuthenticated } = useSelector((state) => state.account)
    const [userDetails, setUserDetails] = useState({ password: "", username: "" })

    const [isModalOpen, setIsModalOpen] = useState(true)

    // const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const onChanage = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const { username, password } = userDetails
        const data = JSON.stringify({ password, username })
        console.log(data)
        const res = await fetch("http://localhost:5001/api/user/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: data,
        })


        const d = await res.json()

        console.log({d})

        if (d.success) {
            toast.success(d.message);
            localStorage.setItem("token", JSON.stringify(d.token))
            console.log({ d })
            dispatch(userActor(d.user))
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
                        <form onSubmit={loginUser} className='text-center mx-auto '>
                            <div className='w-full text-left pt-2'>
                                <label htmlFor="" className='font-semibold inline-block mb-2'>Email or username</label>
                                <input type="text" id='username' name='username' value={userDetails.username} onChange={onChanage} placeholder='Email or username' className='block w-full rounded-md border-0 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-white' />
                            </div>
                            <div className='w-full text-left py-4'>
                                <label htmlFor="" className='font-semibold inline-block mb-2'>Password</label>
                                <input type="password" id='password' name='password' value={userDetails.password} onChange={onChanage} placeholder='Enter your password' className='block w-full rounded-md border-0 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-white' />
                            </div>

                            <div className='w-full text-left py-4'>
                                <input type="submit" id='submit' name='submit' className='block w-full outline-none p-3 hover:scale-105 transition-all duration-200 bg-green-500 hover:bg-green-400 text-black hover:font-semibold text-center rounded-full' />
                            </div>
                            <div className='w-full text-cenetr py-4'>
                                <Link to="/password/forgot" className='text-white font-semibold underline text-center'>Forgot your password?</Link>
                            </div>
                        </form>
                        <div className="border-b border-gray-500 w-3/4 mx-auto my-2"></div>
                        <p className='pt-2'><span className='text-black font-semibold'>Don't have account?</span> <Link to="/signup" className='text-black font-semibold underline text-center hover:text-green-500'>Sign Up for Dream Music</Link></p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Login