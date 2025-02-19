import React from 'react'
import { Carousel } from './Carousel'
import { slides } from '../data/CarouselData.json'
function Header() {
    return (
        <div className="bg-cover relative bg-no-repeat" id='home'>
            <Carousel data={slides} />
            <div
                className="absolute flex flex-col items-start bottom-3 left-16"
                style={{
                    animation: 'fadeIn 3s',
                    zIndex: 10, // Ensure this is higher than the carousel's z-index
                }}
            >
                <h2
                    className="text-white mb-7"
                    style={{ fontSize: 'max(3.5vw,20px)', zIndex: 1 }}
                >
                    Order your favourite food here
                </h2>
                <p
                    className="text-white text-lg mb-10"
                    style={{ maxWidth: '50%', zIndex: 1 }}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum deserunt sequi dolore quia dolor, veritatis, quaerat consequuntur, est fugiat illo necessitatibus possimus? Non, labore fuga. Beatae assumenda, reiciendis necessitatibus error, explicabo facere soluta voluptatum nostrum quaerat dolores minus quas. Corrupti velit aliquam molestiae voluptas possimus magnam, quasi deleniti impedit?
                </p>
                <button className="border-none text-gray-500 text-lg p-2 bg-white rounded-3xl">
                    View Menu
                </button>
            </div>
        </div>

    )
}

export default Header