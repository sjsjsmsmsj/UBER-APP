import React from 'react';

const LocationPanel = ({ setVehiclePanel, setPanelOpen }) => {
    const locations = [
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
        "22B, Near Maholtra's cafe, Sheryians Coding School, Bhopal",
        "20B, Near Singhai's cafe, Sheryians Coding School, Bhopal",
        "18B, Near Sharma's cafe, Sheryians Coding School, Bhopal",
    ];

    const handleClick = () => {
        setVehiclePanel(true);
        setPanelOpen(false);
    };

    return (
        <div>
            {locations.map((location, index) => (
                <div
                    key={index}
                    onClick={handleClick}
                    role="button"
                    className='cursor-pointer flex items-center gap-3 p-3 my-[3px] border-2 rounded border-[white] active:border-[black]'
                >
                    <span className='bg-[#eee] flex items-center justify-center h-6 w-6 rounded-full'>
                        <i className='text-lg ri-map-pin-fill'></i>
                    </span>
                    <h4 className='font-medium'>{location}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationPanel;
