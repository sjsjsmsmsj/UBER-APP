import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email,
            password,
            fullName: {
                firstName,
                lastName
            }

        })
        console.log(userData)
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')

    }
    return (
        <div className='p-[7]  flex flex-col justify-between'>
            <div className='mb-[20px]'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZqKMWPlbZBAv-X0AKjHDHSAYBLu_f6RCJb-45XQSDcaUjg1GWBRfDglGtKbcowzb5R0&usqp=CAU" alt="" className='h-[100px]' />
                <form action="" onSubmit={(e) => { submitHandler(e) }}>
                    <h3 className='text-base font-medium ml-[0px] pl[0px] text-left'>What's our Captain's name</h3>
                    <div className='flex gap-[3px] mb-[6px]'>
                        <input type="text" required placeholder='First Name'
                            className='bg-[#eeeeee]  h-[30px]   w-full px-10 py-2 text-base bg-white border rounded placeholder:text-sm'
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />

                        <input type="text" required placeholder='Last Name'
                            className='bg-[#eeeeee] h-[30px]   w-full px-10 py-2 text-base bg-white border rounded placeholder:text-sm'
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />


                    </div>

                    <h3 className='text-lg  font-medium ml-[0px] text-left'>What's our Captain's email</h3>
                    <input type="email" required placeholder='lamgiathinh05@gmail.com'
                        className='bg-[#eeeeee] mb-[5px] h-[30px]   w-full px-10 lg  bg-white border rounded placeholder:text-sm'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                    <h3 className='mb-2 text-lg font-medium text-left'>Enter Password</h3>
                    <input
                        className='bg-[#eeeeee] h-[30px] mb-[30px]  w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-sm'
                        type="password" name="" id="" required placeholder='12345678'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className='bg-[#111] h-[40px] text-[#fff] font-semibold mt-7 pt-10  w-full px-10 py-2 text-base bg-white border rounded placeholder:text-xm'
                    >Sign up</button>

                    <p className='text-center'>
                        Already have you an account? <Link className='mt-[3px] text-[blue] font-semibold mb-2 rounded px-4 py-2 w-full text-base no-underline' to='/login'>Login here</Link>

                    </p>
                </form>
            </div>
            <div>
                <p className='text-[15px] leading'>
                    This site is protected by reCAPTCHA and the
                    <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
                </p>
            </div>

        </div>
    )
}

export default CaptainSignup