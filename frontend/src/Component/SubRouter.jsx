import React from 'react'
import {Route,Routes} from "react-router-dom";
import Banner from './Banner';
import Main from './Main';
import Footer from './Footer';
import Notice from './Notice';

export default function SubRouter() {
    return (
        <div className='container'>
        <Banner/>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/notice' element={<Notice/>}></Route>
        </Routes>
        <Footer/>
        </div>
      )
}
