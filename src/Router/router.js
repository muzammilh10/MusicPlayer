import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'


import Home from './../Pages/Home'
import DND from "../Component/DreagAndDrop";



const Routers = ({ setIsPlaying, setCurrentIndex ,currentIndex,dataItems}) => {
    return (
        <Routes >
            <Route path='/' exact element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home setIsPlaying={setIsPlaying} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />} />
            <Route path='/playlist' element={<DND setIsPlaying={setIsPlaying} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} dataItems={dataItems} />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/gallery" element={<MasonaryGallryImages />} /> */}
            {/* <Route path='/tours/:id' element={<TourDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path='/tours/search/' element={<SearchResultList />} /> */}

            {/* for all routes */}
            <Route path="*" element={<Navigate to="/home" />} />


        </Routes>
    )
}


export default Routers   