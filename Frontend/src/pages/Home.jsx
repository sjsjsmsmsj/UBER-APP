import React from 'react'

const Home = () => {
    return (
        <div className='h-screen pt-8 pl-9 w-full justify-between flex-col bgr-red-400'>
            <img
                className="max-w-[100px] ml-16 h-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="Uber logo"
            />

            <div className='gb-white'>
                <h2>Get Started with Uber</h2>
                <button>Continue</button>
            </div>
        </div>
    )
}

export default Home