import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const submitHandle = (e) => {
        e.preventDefault();
        setUserData({ email, password })
        console.log(userData);
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-[7]  flex flex-col justify-between'>
            <div className='mb-[20px]'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZqKMWPlbZBAv-X0AKjHDHSAYBLu_f6RCJb-45XQSDcaUjg1GWBRfDglGtKbcowzb5R0&usqp=CAU" alt="" className='h-[100px]' />
                <form action="" onSubmit={(e) => { submitHandle(e) }}>

                    <h3 className='text-lg font-medium ml-[0px]'>What's your email</h3>
                    <input type="email" required placeholder='email@example.com'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className='bg-[#eeeeee] mb-7 h-[30px]   w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-xm'
                    />
                    <h3 className='mb-2 text-lg font-medium'>Enter Password</h3>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] h-[30px] mb-[30px]  w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-xm'
                        type="password" name="" id="" required placeholder='12345678' />
                    <button
                        className='bg-[#111] h-[40px] text-[#fff] font-semibold mt-7 pt-10  w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-xm'
                    >Login</button>
                    <p className='text-center'>
                        New here?
                        <Link className='mt-[3px] text-[blue] font-semibold mb-2 rounded px-4 py-2 w-full text-lg' to='/signup'>Create new Account</Link>

                    </p>
                </form>
            </div>
            <div>
                <Link to='/captain-login' className="bg-[green] h-[50px] text-[#fff] font-semibold pt-[10px]  w-full px-[10px] py-[3px] text-lg bg-white border rounded placeholder:text-xm no-underline
">
                    Sign in as Captain
                </Link>
            </div>

        </div>
    )


}

export default UserLogin