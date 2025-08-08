import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const CaptainSignup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [userData, setUserData] = useState({})

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const { captain, setCaptain } = useContext(CaptainDataContext)


    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = ({
            email: email,
            password: password,
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }

        })

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

        if (response.status === 201) {
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
        setCaptain(captainData)
        console.log(captainData)

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
                        autoComplete="email"

                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                    <h3 className='mb-2 text-lg font-medium text-left'>Enter Password</h3>
                    <input
                        autoComplete="new-password"

                        className='bg-[#eeeeee] h-[30px] mb-[30px]  w-full px-10 py-2 text-lg bg-white border rounded placeholder:text-sm'
                        type="password" name="" id="" required placeholder='12345678'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />


                    <h3 className='mb-[2px] text-lg font-medium'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-7'>
                        <input
                            required
                            className='bg-[#eeeeee] mr-[10px] w-1/2 rounded-lg px-[4px] py-[4px] border text-lg placeholder:text-base'
                            type="text"
                            placeholder='Vehicle Color'
                            value={vehicleColor}
                            onChange={(e) => {
                                setVehicleColor(e.target.value)
                            }}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2 ml-[10px] rounded-lg px-[4px] py-[4px] border text-lg placeholder:text-base'
                            type="text"
                            placeholder='Vehicle Plate'
                            value={vehiclePlate}
                            onChange={(e) => {
                                setVehiclePlate(e.target.value)
                            }}
                        />
                    </div>
                    <div className='flex mb-[7px]'>
                        <input
                            required
                            className='bg-[#eeeeee] mr-[30px] w-1/2 rounded-[lg] px-[4px] py-[2px] border text-lg placeholder:text-base'
                            type="number"
                            placeholder='Vehicle Capacity'
                            value={vehicleCapacity}
                            onChange={(e) => {
                                setVehicleCapacity(e.target.value)
                            }}
                        />
                        <select
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-[4px] py-[4px] border text-lg placeholder:text-base'
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value)
                            }}
                        >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                        </select>
                    </div>


                    <button
                        className='bg-[#111] h-[40px] text-[#fff] font-semibold mt-7 pt-10  w-full px-10 py-2 text-base bg-white border rounded placeholder:text-xm'
                    >Create Captain Account</button>

                    <p className='text-center'>
                        Already have you an account? <Link className='mt-[3px] text-[blue] font-semibold mb-2 rounded px-4 py-2 w-full text-base no-underline' to='/captain-login'>Login here</Link>

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