import React from 'react'

const CaptainSignup = () => {
    return (
        <div className=''>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZqKMWPlbZBAv-X0AKjHDHSAYBLu_f6RCJb-45XQSDcaUjg1GWBRfDglGtKbcowzb5R0&usqp=CAU" alt="" className='h-[100px]' />
            <form action="">

                <h3 className='text-lg font-medium ml-[0px]'>What's your email</h3>
                <input type="email" required placeholder='email@example.com'
                    className='bg-[#eeeeee] mb-7 h-[30px]   w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-xm'
                />
                <h3 className='mb-2 text-lg font-medium'>Enter Password</h3>
                <input
                    className='bg-[#eeeeee] h-[30px] mb-[30px]  w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-xm'
                    type="password" name="" id="" required placeholder='12345678' />
                <button
                    className='bg-[#111] h-[40px] text-[#fff] font-semibold mt-7 pt-10  w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-xm'
                >Sign in as Captain</button>
            </form>
        </div>

    )
}

export default CaptainSignup