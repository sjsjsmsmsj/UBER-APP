import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex flex-col justify-between w-full h-screen">
            {/* Header with background image and Uber logo */}
            <div className="h-[60%] bg-[url('https://images.unsplash.com/photo-1519994007676-baabab4bf574?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-start p-6">
                <img
                    className="max-w-[120px] h-auto bg-white"
                    src="https://www.edigitalagency.com.au/wp-content/uploads/new-Uber-logo-white-PNG.png"
                    alt="Uber logo"
                />
            </div>

            {/* Footer with title and button */}
            <div className="h-[40%] bg-white p-6 text-center">
                <h2 className="mb-4 text-2xl font-bold">Get Started with Uber</h2>
                <Link
                    to="/login"
                    className="no-underline bg-[#111] p-[7px] block  py-3 text-center text-[#fff] transition duration-200 bg-black rounded hover:opacity-90"
                >
                    Continue
                </Link>

            </div>
        </div>
    )
}

export default Home
