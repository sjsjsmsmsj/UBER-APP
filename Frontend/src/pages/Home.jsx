import React from 'react'
import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../components/LocationPanel'


const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelCloseRef = useRef(null)

    const panelRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()

    }
    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '100%', // chiếm toàn màn hình
                top: 0,
                padding: 20
            })
            gsap.to(panelCloseRef.current, { opacity: 1 })
        } else {
            gsap.to(panelRef.current, {
                height: '0px',
                padding: 20
            })
            gsap.to(panelCloseRef.current, { opacity: 0 })
        }
    }, [panelOpen])



    return (
        <div className='relative h-screen'>
            <img className='w-[100px] absolute left-[15px] top-[5px]' src="data:image/png;base64,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" alt="" />
            <div className='w-full h-[450px]'>
                <img className='object-cover w-full h-[450px]' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='absolute flex flex-col w-full h-screen'>

                <div className='h-[30%] p-5 relative'>
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute top-[5px] right-[6px]'>
                        <i className='ri-arrow-down-wide-line'></i>
                    </h5>
                    <h4 className='font-[bold]'>Find a trip</h4>
                    <form action="" onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <input
                            className='bg-[#eee] px-[12px] py-[5px] text-lg rounded-lg w-full mb-[5px] border border-gray-400 mt-[5px]'
                            type="text"
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            placeholder='Add a pick-up location'
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                        />

                        {/* Line connector */}
                        <div className="absolute left-[10px] top-[75px] w-[3px] h-[35px] bg-[gray] rounded-full"></div>

                        <input
                            className='bg-[#eee] px-[12px] py-[5px] text-lg rounded-lg w-full border border-gray-400 mt-[5px]'
                            type="text"
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            placeholder='Enter your destination'
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value)
                            }}
                        />
                    </form>
                </div>
                <div className='h-[70%] bg-[white] p-5 h-[0px]' ref={panelRef}>
                    <LocationPanel />
                </div>
                <div className='fixed w-8/9 bottom-0 z-10 h-[10] p-[3px] bg-[white] px-3 py-6'>
                    <h3 className='text-lg font-medium mb-[5px]'>Choose a vehicle</h3>
                    <div className='flex items-center border-[2px] justify-between border-black rounded-[xl] h-[120px]'>
                        <img className='w-[85px] h-[85px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSF95CrjLiN1GWozOua1uJFCkeDTsLTOb1A&s" alt="" />
                        <div className=' left-[0px] w-1/2 h-[120px]'>
                            <h4 className='left-0 text-sm font-medium'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
                            <h5 className='text-sm font-medium'>2 mins away</h5>
                            <p className='text-sm font-medium text-gray-600'>Affordable, compact rides</p>
                        </div>
                        <h2 className='text-[xl] font-semibold'>$193.20</h2>
                    </div>
                    <div className='flex items-center border-[2px] justify-between border-black rounded-[xl]'>
                        <img className='w-[85px] h-[80px]' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1743773253/assets/5e/8ce23d-35fa-425d-a7d2-08a2826d04bc/original/UberBlackXL.png" alt="" />
                        <div className=' left-[0px] w-1/2 h-[110px]'>
                            <h4 className='left-0 text-sm font-medium'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
                            <h5 className='text-sm font-medium'>2 mins away</h5>
                            <p className='text-sm font-medium text-gray-600'>Affordable, compact rides</p>
                        </div>
                        <h2 className='text-[xl] font-semibold'>$150.20</h2>
                    </div>

                    <div className='flex items-center border-[2px] justify-between border-black rounded-[xl]'>
                        <img className='w-[85px] h-[80px]' src="data:image/jpeg;base64,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" alt="" />
                        <div className=' left-[0px] w-1/2 h-[110px]'>
                            <h4 className='left-0 text-sm font-medium'>Moto<span><i className='ri-user-3-fill'></i>4</span></h4>
                            <h5 className='text-sm font-medium'>2 mins away</h5>
                            <p className='text-sm font-medium text-gray-600'>Affordable, compact rides</p>
                        </div>
                        <h2 className='text-[xl] font-semibold'>$65</h2>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Home 