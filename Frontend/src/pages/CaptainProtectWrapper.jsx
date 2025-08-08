import React, { useContext, useEffect } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainProtectWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    console.log(token)
    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response.data)
            setIsLoading(false)
        }).catch((error) => {
            console.log(error)
            setIsLoading(false)
        })
    }, [token])


    if (isLoading) {
        return <div>Loading...</div>
    }



    return (
        <>
            {children}
        </>
    )

}

export default CaptainProtectWrapper