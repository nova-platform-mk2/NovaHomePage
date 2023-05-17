import React from 'react'
import {Route,Routes} from "react-router-dom";
import Banner from './Banner';
import Main from './Main';
import Footer from './Footer';
import Notice from './Notice';
import DocumentList from '../pages/documents/documentList';
import DocumentWrite from '../pages/documents/documentWrite';

export default function SubRouter() {
    return (
        <div className='container'>
            <Banner/>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/notice' element={<Notice/>}></Route>
                <Route path='/documentslist' element={<DocumentList/>}></Route>
                <Route path='/documentswrite' element={<DocumentWrite/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}