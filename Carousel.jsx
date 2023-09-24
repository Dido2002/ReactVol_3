import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Slide } from "react-reveal";
import Wobble from 'react-reveal/Wobble';





const Carousel = () => {

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        }

    ];




    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);

    };


 





    return (
        
                <Slide right>
                    <div className='max-w-[1400px] h-[360px] w-2/5 p-2 md:p-4 relative group max-sm:w-full border-4 border-yellow border-dashed rounded-xl '>
                        <div
                            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                            className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
                        ></div>
                        {/* Left Arrow */}
                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
                            <BsChevronCompactLeft onClick={prevSlide} size={30} />
                        </div>
                        {/* Right Arrow */}
                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30} />
                        </div>

                        <div className='flex top-4 justify-center py-6 text-ivory'>
                            {slides.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => {
                                        goToSlide(slideIndex)
                                    }}
                                    className={`text-2xl cursor-pointer  ${currentIndex === slideIndex ? "text-white border-2 rounded-full border-dotted animate-pulse " : "bg-opacity-50"}`}
                                >
                                    <RxDotFilled />
                                </div>
                            ))}
                        </div>
                    </div>
                </Slide>

    );
}

export default Home;