import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'
import { useContext } from 'react'

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { captain, setCaptain } = useContext(CaptainDataContext)
    const navigate = useNavigate()

    const submitHandle = async (e) => {
        e.preventDefault();
        const captain = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
        console.log(response.data)


        if (response.status === 200) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')

        }

        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-[7]  flex flex-col justify-between'>
            <div className='mb-[20px]'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" className='h-[50px] pl-[0px]' />
                <form action="" onSubmit={(e) => { submitHandle(e) }}>

                    <h3 className='text-lg font-medium ml-[0px]'>What's your email</h3>
                    <input type="email" required placeholder='email@example.com'
                        autoComplete="email"

                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className='bg-[#eeeeee] mb-7 h-[30px]   w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-xm'
                    />
                    <h3 className='mb-2 text-lg font-medium'>Enter Password</h3>
                    <input
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] h-[30px] mb-[30px]  w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-xm'
                        type="password" name="" id="" required placeholder='12345678' />
                    <button
                        className='bg-[#111] h-[40px] text-[#fff] font-semibold mt-7 pt-10  w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-xm'
                    >Login</button>
                    <p className='text-center'>
                        Join a fleet?
                        <Link className='no-underline mt-[3px] text-[blue] font-semibold mb-2 rounded px-4 py-2 w-full text-lg' to='/captain-signup'>Register as a Captain</Link>

                    </p>
                </form>
            </div>
            <div>
                <Link to='/login' className="bg-[orange] h-[50px] text-[#fff] font-semibold pt-[10px]  w-full px-[10px] py-[3px] text-lg bg-white border rounded placeholder:text-xm no-underline
">
                    Sign in as User Login
                </Link>
            </div>

        </div>
    )


}

export default CaptainLogin