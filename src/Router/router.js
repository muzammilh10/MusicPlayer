import React from "react"; 
import {Routes, Route, Navigate} from 'react-router-dom'




const Routers =()=> {
    return (
        <Routes >
            <Route path='/' exact element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/tours' element={<Tour />} />
            <Route path="/about" element={<About />} /> */}
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